import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  fetchPodcastByIdRequest,
  getPodcastsSelector,
} from '../../redux-modules'

export const usePodcastDetail = (podcastId: string) => {
  const podcasts = useSelector(getPodcastsSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const podcastDetail = podcasts.find((podcast) => podcast.id === podcastId)
  useEffect(() => {
    dispatch(fetchPodcastByIdRequest(podcastId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickSideBar = useCallback(() => {
    navigate(`/podcast/${podcastId}`)
  }, [navigate, podcastId])

  return { ...podcastDetail, handleClickSideBar }
}
