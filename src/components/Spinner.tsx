import React from 'react'
import styles from './Spinner.module.css'

const Spinner = ({ message }: { message?: string }) => {
  return (
    <div className={styles.spinner}>
      {message && (
        <div
          className={styles.spinnerMessage}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  )
}

export default Spinner
