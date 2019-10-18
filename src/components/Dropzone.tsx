import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './Dropzone.module.css'

export default function Dropzone({
  handleOnDrop,
  disabled,
  multiple,
  error
}: {
  handleOnDrop(files: File[]): void
  disabled?: boolean
  multiple?: boolean
  error?: string
}) {
  const onDrop = useCallback(acceptedFiles => handleOnDrop(acceptedFiles), [
    handleOnDrop
  ])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject
  } = useDropzone({ onDrop })

  return (
    <div
      {...getRootProps({
        className: isDragActive
          ? styles.dragover
          : disabled
          ? styles.disabled
          : styles.dropzone
      })}
    >
      <input {...getInputProps({ multiple })} />
      {isDragActive && !isDragReject ? (
        `Drop it like it's hot!`
      ) : multiple ? (
        `Drag 'n' drop some files here, or click to select files`
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        `Drag 'n' drop a file here, or click to select a file`
      )}
    </div>
  )
}
