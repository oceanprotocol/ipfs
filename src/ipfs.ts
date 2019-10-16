import ipfsClient from 'ipfs-http-client'
import { ipfsNodeUri } from '../site.config'

export async function saveToIpfs(files: File[]) {
  const { hostname, port, protocol } = new URL(ipfsNodeUri)

  const ipfsConfig = {
    protocol: protocol.replace(':', ''),
    host: hostname,
    port: port || '443'
  }

  const ipfs = ipfsClient(ipfsConfig)

  const file = [...files][0]
  let ipfsId
  const fileDetails = {
    path: file.name,
    content: file
  }
  const options = {
    wrapWithDirectory: true,
    progress: (prog: number) => console.log(`received: ${prog}`)
  }

  try {
    const response = await ipfs.add(fileDetails, options)

    // CID of wrapping directory is returned last
    ipfsId = `${response[response.length - 1].hash}/${fileDetails.path}`
    return ipfsId
  } catch (error) {
    console.error(error.message)
  }
}
