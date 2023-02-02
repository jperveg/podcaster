import { useParams } from 'react-router-dom'
import { useEpisode } from '../../../hooks'
import { EpisodeProps } from '../../../redux-modules'
import { EpisodeView } from './view'

export const Episode = () => {
  const { episodeId, podcastId } = useParams()
  if (!episodeId || !podcastId) {
    return null
  }
  const props = useEpisode({ episodeId, podcastId }) as EpisodeProps
  return <EpisodeView {...props} />
}
