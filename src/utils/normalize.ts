import { IPodcast, IPodcastFromITunes } from '../redux-modules'

export const normalizePodcasts = (
  podcastsFromITunes: IPodcastFromITunes[]
): IPodcast[] => {
  if (!podcastsFromITunes) return []
  return podcastsFromITunes.map((podcast) => {
    return {
      id: podcast.id.attributes['im:id'],
      author: podcast['im:artist'].label,
      summary: podcast.summary.label,
      image: podcast['im:image'][2].label,
      title: podcast.title.label,
      link: podcast.link.attributes.href,
      releaseDate: podcast['im:releaseDate'].label,
    }
  })
}

export const convertRssStringToEpisodes = (rssString: string) => {
  if (!rssString) return []
  const feed = new window.DOMParser().parseFromString(rssString, 'text/xml')
  const items = feed.querySelectorAll('item')
  const episodes = Array.from(items).map((el) => ({
    link: el.querySelector('link')?.innerHTML ?? '',
    title: el.querySelector('title')?.innerHTML ?? '',
    author: el.querySelector('author')?.innerHTML ?? '',
    description: el.querySelector('description')?.innerHTML ?? '',
    id: el.querySelector('guid')?.innerHTML ?? '',
    pubDate: el.querySelector('pubDate')?.innerHTML ?? '',
    duration: parseInt(el.querySelector('duration')?.innerHTML ?? '0', 10),
    player: el.querySelector('content')?.getAttribute('url') ?? '',
  }))
  return episodes
}

export const convertSecondsToTime = (durationInSeconds: number) => {
  const totalMinutes = Math.floor(durationInSeconds / 60)

  const seconds = durationInSeconds % 60
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  const result = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
  return result
}
