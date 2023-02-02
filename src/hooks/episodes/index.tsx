import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { EpisodeProps, getPodcastDetailSelector } from '../../redux-modules'
import { convertSecondsToTime } from '../../utils/normalize'

const normalizeEpisodes = (episodes: EpisodeProps[]) => {
  if (!episodes.length) return []
  return episodes.map((episode: EpisodeProps) => {
    return {
      ...episode,
      pubDate: new Date(episode.pubDate).toLocaleDateString(),
      durationString: convertSecondsToTime(episode.duration),
    }
  })
}

export const useEpisodeList = (podcastId: string) => {
  const details = useSelector(getPodcastDetailSelector)
  const navigate = useNavigate()
  const episodes = details[podcastId]?.episodes || []

  const handleClickEpisode = (episodeId: string) => {
    navigate(`/episdode/${episodeId}`)
  }

  return { episodes: normalizeEpisodes(episodes), handleClickEpisode }
}
