import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  fetchPodcastByIdRequest,
  fetchPodcastsListRequest,
  getPodcastDetailSelector,
  getPodcastsSelector,
} from '../../redux-modules'

export const usePodcastDetail = (podcastId: string) => {
  const podcasts = useSelector(getPodcastsSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const podcastDetail =
    podcasts?.find((podcast) => podcast.id === podcastId) ?? null

  const details = useSelector(getPodcastDetailSelector)
  const episodes = details?.[podcastId]?.episodes || []
  const timestamp = details?.[podcastId]?.timestamp ?? null

  //only its necessary to update the podcast list when peristence is expired
  useEffect(() => {
    if (!podcasts?.length) {
      dispatch(fetchPodcastsListRequest())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcasts])
  useEffect(() => {
    const currentTimestamp = new Date().getTime()
    if (!episodes?.length || (timestamp && timestamp < currentTimestamp)) {
      dispatch(fetchPodcastByIdRequest(podcastId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [episodes, podcastId, timestamp])

  const handleClickSideBar = useCallback(() => {
    navigate(`/podcast/${podcastId}`)
  }, [navigate, podcastId])

  return { ...podcastDetail, handleClickSideBar }
}
