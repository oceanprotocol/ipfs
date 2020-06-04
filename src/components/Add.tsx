import React, { useState, useEffect } from 'react'
import useIpfsApi, { IpfsConfig } from '../hooks/use-ipfs-api'
import { formatBytes, addToIpfs } from '../utils'
import { ipfsNodeUri, ipfsGateway } from '../../site.config'
import Dropzone from './Dropzone'
import styles from './Add.module.css'
import Spinner from './Spinner'

const { hostname, port, protocol } = new URL(ipfsNodeUri)

const ipfsConfig: IpfsConfig = {
  protocol: protocol.replace(':', ''),
  host: hostname,
  port: port || '443'
}

export default function Add() {
  const { ipfs, isIpfsReady, ipfsError } = useIpfsApi(ipfsConfig)
  const [fileHash, setFileHash] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [fileSize, setFileSize] = useState('')
  const [fileSizeReceived] = useState('')

  useEffect(() => {
    setMessage(
      `Adding to IPFS<br />
       <small>${fileSizeReceived || 0}/${fileSize}</small><br />`
    )
  }, [fileSize, fileSizeReceived])

  async function handleOnDrop(acceptedFiles: File[]) {
    if (!acceptedFiles[0]) return

    setLoading(true)
    setError('')

    const totalSize = formatBytes(acceptedFiles[0].size, 0)
    setFileSize(totalSize)

    try {
      const cid = await addToIpfs(acceptedFiles, ipfs)
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
      {loading ? (
        <Spinner message={message} />
      ) : fileHash !== '' ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${ipfsGateway}/ipfs/${fileHash}`}
        >
          ipfs://{fileHash}
        </a>
      ) : (
        <Dropzone
          multiple={false}
          handleOnDrop={handleOnDrop}
          disabled={!isIpfsReady}
          error={error || ipfsError}
        />
      )}
    </div>
  )
}
