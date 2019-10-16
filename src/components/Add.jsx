import React, { useState } from 'react'
import { saveToIpfs } from '../ipfs'
import { ipfsGateway } from '../../config'
import Dropzone from './Dropzone'
import './Add.css'
import Spinner from './Spinner'

export default function Add() {
  const [fileHash, setFileHash] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCaptureFile = async files => {
    setLoading(true)
    const cid = await saveToIpfs(files)
    setFileHash(cid)
    setLoading(false)
  }

  return (
    <div className="add">
      {loading ? (
        <Spinner />
      ) : fileHash ? (
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${ipfsGateway}/ipfs/${fileHash}`}
          >
            {fileHash}
          </a>
        </div>
      ) : (
        <Dropzone multiple={false} handleOnDrop={handleCaptureFile} />
      )}
    </div>
  )
}
