import React, { useState, useEffect } from 'react'
import { pingUrl } from '../utils'
import { ipfsGateway, ipfsNodeUri } from '../../site.config'
import styles from './Status.module.css'

export default function Status({ type }: { type: string }) {
  const [isOnline, setIsOnline] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  async function ping() {
    const url =
      type === 'gateway'
        ? `${ipfsGateway}/ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme`
        : `${ipfsNodeUri}/api/v0/id`

    const ping = await pingUrl(url)
    setIsLoading(false)
    isOnline !== ping && setIsOnline(ping)
  }

  useEffect(() => {
    ping()

    const timer = setInterval(() => {
      ping()
    }, 10000) // run every 10 sec.

    return () => {
      clearInterval(timer)
      setIsOnline(false)
      setIsLoading(false)
    }
  }, [])

  const classes = isLoading
    ? styles.loading
    : isOnline
    ? styles.online
    : styles.status

  return (
    <span
      className={classes}
      title={isLoading ? 'Checking...' : isOnline ? 'Online' : 'Offline'}
    />
  )
}
