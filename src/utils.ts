import axios from 'axios'

export function formatBytes(a: number, b: number) {
  if (a === 0) return '0 Bytes'
  const c = 1024
  const d = b || 2
  const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const f = Math.floor(Math.log(a) / Math.log(c))
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}

const streamFiles = (ipfs: any, file: any) =>
  new Promise((resolve, reject) => {
    const stream = ipfs.addReadableStream({
      wrapWithDirectory: true
      // progress: (length: number) => setFileSizeReceived(formatBytes(length, 0))
    })

    stream.on('data', (data: any) => {
      console.log(`Added ${data.path} hash: ${data.hash}`)

      // The last data event will contain the directory hash
      if (data.path === '') resolve(data.hash)
    })

    stream.on('error', reject)
    stream.write(file)
    stream.end()
  })

export async function addToIpfs(files: File[], ipfs: any) {
  const file = [...files][0]
  const fileDetails = { path: file.name, content: file }

  const directoryCid = await streamFiles(ipfs, fileDetails)
  const cid = `${directoryCid}/${file.name}`
  return cid
}

export async function pingUrl(url: string) {
  try {
    const response = await axios(url, { timeout: 5000 })
    if (!response || response.status !== 200) return false
    return true
  } catch (error) {
    console.error(error.message)
    return false
  }
}

export function parseHTML(str: string) {
  const tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = str
  return tmp.body.children
}
