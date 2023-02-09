const endpoints = {
  get: '/us/rss/toppodcasts/limit=100/genre=1310/json',
  baseUrl: 'https://itunes.apple.com/',
}

export const getAllPodcasts = () => {
  //  return getFetcher().get(endpoints.get)
  return fetch(`${endpoints.baseUrl}${endpoints.get}`)
    .then((response) => {
      if (response.ok) return response.json()
      throw new Error('Network response was not ok.')
    })
    .then((data) => data)
}
