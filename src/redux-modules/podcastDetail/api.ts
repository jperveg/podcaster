// import { getFetcher } from '../../utils/fetcher'

const endpoints = {
  get: 'lookup?id=',
  corsGet: 'https://api.allorigins.win/get?url=',
  corsRaw: 'https://api.allorigins.win/raw?url=',
}

export const getPodcastDetailById = (podcastId: string) => {
  return fetch(
    `${endpoints.corsGet}${encodeURIComponent(
      `https://itunes.apple.com/${endpoints.get}${podcastId}`
    )}`
  )
    .then((response) => {
      if (response.ok) return response.json()
      throw new Error('Network response was not ok.')
    })
    .then((data) => {
      return JSON.parse(data.contents)
    })
}

export const getEpisodesData = (uriRss: string) => {
  return fetch(uriRss, { mode: 'cors' })
    .then((response) => response.text())
    .catch(() => {
      return fetch(`${endpoints.corsRaw}${encodeURIComponent(`${uriRss}`)}`)
        .then((response) => {
          if (response.ok) return response.text()
          throw new Error('Network response was not ok.')
        })
        .then((data) => {
          return data
        })
    })
}
