import { EpisodeProps } from '../../../redux-modules'

export interface EpisodeListViewProps {
  episodes: EpisodeProps[]
  handleClickEpisode: (id: string) => void
}
