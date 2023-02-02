import { useParams } from 'react-router-dom'
import { usePodcastDetail } from '../../hooks'
import { PodcastDetailView } from './view'

export const PodcastDetail = () => {
  const { podcastId } = useParams()
  const props = usePodcastDetail(podcastId as string)
  return <PodcastDetailView {...props} />
}
