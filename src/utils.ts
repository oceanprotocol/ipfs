import axios from 'axios'

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
