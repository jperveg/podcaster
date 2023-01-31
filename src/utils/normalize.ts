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
      image: podcast['im:image'][0].label,
      title: podcast.title.label,
      link: podcast.link.attributes.href,
      releaseDate: podcast['im:releaseDate'].label,
    }
  })
}
