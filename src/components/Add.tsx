import React, { useState, useEffect } from 'react'
import { ipfsNodeUri, ipfsGateway } from '../../site.config'
import Dropzone from './Dropzone'
import styles from './Add.module.css'
import Spinner from './Spinner'
import useIpfsApi, { IpfsConfig } from '../hooks/use-ipfs-api'

export function formatBytes(a: number, b: number) {
  if (a === 0) return '0 Bytes'
  const c = 1024
  const d = b || 2
  const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const f = Math.floor(Math.log(a) / Math.log(c))
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}

const { hostname, port, protocol } = new URL(ipfsNodeUri)

const ipfsConfig: IpfsConfig = {
  protocol: protocol.replace(':', ''),
  host: hostname,
  port: port || '443'
}

async function addToIpfs(
  files: File[],
  setFileSizeReceived: (size: string) => void
) {
  const { ipfs } = useIpfsApi(ipfsConfig)
  const file = [...files][0]
  const fileDetails = { path: file.name, content: file }

  const response = await ipfs.add(fileDetails, {
    wrapWithDirectory: true,
    progress: (length: number) => setFileSizeReceived(formatBytes(length, 0))
  })

  // CID of wrapping directory is returned last
  const cid = response[response.length - 1].hash
  return cid
}

export default function Add() {
  const { isIpfsReady, ipfsError } = useIpfsApi(ipfsConfig)
  const [fileHash, setFileHash] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()
  const [error, setError] = useState()
  const [fileSize, setFileSize] = useState()
  const [fileSizeReceived, setFileSizeReceived] = useState('')

  useEffect(() => {
    setMessage(
      `Adding to IPFS<br />
       <small>${fileSizeReceived || 0}/${fileSize}</small><br />`
    )
  }, [fileSize, fileSizeReceived])

  async function handleOnDrop(acceptedFiles: File[]) {
    if (!acceptedFiles[0]) return

    setLoading(true)
    setError(null)

    const totalSize = formatBytes(acceptedFiles[0].size, 0)
    setFileSize(totalSize)

    try {
      const cid = await addToIpfs(acceptedFiles, setFileSizeReceived)
      if (!cid) return
      setFileHash(cid)
      setLoading(false)
    } catch (error) {
      setError(`Adding to IPFS failed: ${error.message}`)
      return null
    }
  }

  return (
    <div className={styles.add}>
      <h2 className={styles.title}>Add a file to IPFS</h2>
      {loading ? (
        <Spinner message={message} />
      ) : fileHash ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${ipfsGateway}/ipfs/${fileHash}`}
        >
          ipfs://{fileHash}
        </a>
      ) : (
        <>
          <Dropzone
            multiple={false}
            handleOnDrop={handleOnDrop}
            disabled={!isIpfsReady}
          />
          {(error || ipfsError) && (
            <div className={styles.error}>{error || ipfsError}</div>
          )}
        </>
      )}
    </div>
  )
}
