import { useEffect, useState } from 'react'
import ipfsClient from 'ipfs-http-client'

let ipfs: any = null
let ipfsVersion = ''

export interface IpfsConfig {
  protocol: string
  host: string
  port: string
}

export default function useIpfsApi(config: IpfsConfig) {
  const [isIpfsReady, setIpfsReady] = useState(Boolean(ipfs))
  const [ipfsError, setIpfsError] = useState('')

  async function initIpfs() {
    if (ipfs !== null) return
    // eslint-disable-next-line
    ipfs = await ipfsClient(config)

    try {
      const version = await ipfs.version()
      ipfsVersion = version.version
    } catch (error) {
      setIpfsError(`IPFS connection error: ${error.message}`)
      return
    }
    setIpfsReady(Boolean(await ipfs.id()))
  }

  useEffect(() => {
    initIpfs()
  }, [config])

  useEffect(() => {
    // just like componentWillUnmount()
    return function cleanup() {
      if (ipfs) {
        setIpfsReady(false)
        ipfs = null
        ipfsVersion = ''
        setIpfsError('')
      }
    }
  }, [])

  return { ipfs, ipfsVersion, isIpfsReady, ipfsError }
}
