import { IPodcast } from '../../../redux-modules'

export type PodcastListItemViewProps = Pick<
  IPodcast,
  'author' | 'title' | 'id' | 'image'
> & {
  handleClickPodcast: (id: string) => void
}
