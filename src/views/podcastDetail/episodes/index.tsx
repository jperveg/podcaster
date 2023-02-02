import { useParams } from 'react-router-dom'
import { useEpisodeList } from '../../../hooks'
import { EpisodesListView } from './view'

export const EpisodesList = () => {
  const { podcastId } = useParams()
  const { episodes, handleClickEpisode } = useEpisodeList(podcastId as string)
  return (
    <EpisodesListView
      episodes={episodes}
      handleClickEpisode={handleClickEpisode}
    />
  )
}
