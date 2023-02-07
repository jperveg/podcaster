import { usePodcastList } from '../../hooks'

type PodcastsListProps = ReturnType<typeof usePodcastList>
export type IPodcastList = React.FC<PodcastsListProps>
