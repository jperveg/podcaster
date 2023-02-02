import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPodcastByIdRequest,
  getPodcastsSelector,
} from '../../redux-modules'

export const usePodcastDetail = (podcastId: string) => {
  const podcasts = useSelector(getPodcastsSelector)
  const dispatch = useDispatch()
  const podcastDetail = podcasts.find((podcast) => podcast.id === podcastId)
  useEffect(() => {
    dispatch(fetchPodcastByIdRequest(podcastId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { ...podcastDetail }
}
