import { IPodcast, IPodcastFromITunes } from '../redux-modules'
// import DOMPurify from 'dompurify'

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

export const convertDateToSeconds = (dateString: string): number => {
  if (!dateString.includes(':')) return parseInt(dateString)
  const dateSplitted = dateString.split(':')
  const dateStringHHmmss =
    dateSplitted.length === 2 ? ['0', ...dateSplitted] : dateSplitted
  const [hours, minutes, seconds] = dateStringHHmmss
  const numberSOfseconds =
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)
  return numberSOfseconds
}

export const removeCDATA = (htmlString: string): string => {
  return htmlString
    .trim()
    .replace(/^(\/\/\s*)?<!\[CDATA\[|(\/\/\s*)?\]\]>$/g, '')
  // return DOMPurify.sanitize(htmlString, {
  //   USE_PROFILES: { html: true },
  // })
}

export const convertRssStringToEpisodes = (rssString: string) => {
  if (!rssString) return []
  const feed = new window.DOMParser().parseFromString(rssString, 'text/xml')
  const items = feed.querySelectorAll('item')
  const episodes = Array.from(items).map((el) => ({
    link: removeCDATA(el.querySelector('link')?.innerHTML ?? ''),
    title: removeCDATA(el.querySelector('title')?.innerHTML ?? ''),
    author: el.querySelector('author')?.innerHTML ?? '',
    description: removeCDATA(el.querySelector('description')?.innerHTML ?? ''),
    id: removeCDATA(el.querySelector('guid')?.innerHTML ?? ''),
    pubDate: el.querySelector('pubDate')?.innerHTML ?? '',
    duration: convertDateToSeconds(
      el.querySelector('duration')?.innerHTML ?? '0'
    ),
    player: el.querySelector('enclosure')?.getAttribute('url') ?? '',
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
