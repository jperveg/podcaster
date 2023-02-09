const endpoints = {
  get: 'lookup?id=',
  corsGet: 'https://api.allorigins.win/get?url=',
  corsRaw: 'https://api.allorigins.win/raw?url=',
  baseUrl: 'https://itunes.apple.com/',
}

export const getPodcastDetailById = (podcastId: string) => {
  return fetch(
    `${endpoints.corsGet}${encodeURIComponent(
      `${endpoints.baseUrl}${endpoints.get}${podcastId}`
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
