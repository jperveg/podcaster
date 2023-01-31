import { getFetcher } from '../../utils/fetcher'

const endpoints = {
  get: '/us/rss/toppodcasts/limit=100/genre=1310/json',
}

export const getAllPodcasts = () => {
  return getFetcher().get(endpoints.get)
}
