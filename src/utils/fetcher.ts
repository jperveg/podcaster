import axios, { AxiosInstance } from 'axios'

let fetcher: AxiosInstance | undefined

export function getFetcher() {
  if (!fetcher) {
    throw Error('Fetcher must be initiliaze')
  }

  return fetcher
}

export function setupFetcher(): void {
  fetcher = axios.create({
    baseURL: 'https://itunes.apple.com/',
  })
}
