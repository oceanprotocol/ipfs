import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import './Dropzone.css'

Dropzone.propTypes = {
  handleOnDrop: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool
}

export default function Dropzone({ handleOnDrop, disabled, multiple }) {
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
          ? 'dragover'
          : disabled
          ? 'disabled'
          : 'dropzone'
      })}
    >
      <input {...getInputProps({ multiple })} />
      <p>
        {isDragActive && !isDragReject
          ? `Drop it like it's hot!`
          : multiple
          ? `Drag 'n' drop some files here, or click to select files`
          : `Drag 'n' drop a file here, or click to select a file`}
        {}
      </p>
    </div>
  )
}
