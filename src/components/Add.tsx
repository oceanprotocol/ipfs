import React, { useState } from 'react'
import { saveToIpfs } from '../ipfs'
import { ipfsGateway } from '../../site.config'
import Dropzone from './Dropzone'
import styles from './Add.module.css'
import Spinner from './Spinner'

export default function Add() {
  const [fileHash, setFileHash] = useState()
  const [loading, setLoading] = useState(false)

  const handleCaptureFile = async (files: File[]) => {
    setLoading(true)
    const cid = await saveToIpfs(files)
    setFileHash(cid)
    setLoading(false)
  }

  return (
    <div className={styles.add}>
      {loading ? (
        <Spinner />
      ) : fileHash ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${ipfsGateway}/ipfs/${fileHash}`}
        >
          ipfs://{fileHash}
        </a>
      ) : (
        <Dropzone multiple={false} handleOnDrop={handleCaptureFile} />
      )}
    </div>
  )
}
