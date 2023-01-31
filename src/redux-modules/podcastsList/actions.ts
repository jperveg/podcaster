import {
  FETCH_PODCASTS_LIST_FAILURE,
  FETCH_PODCASTS_LIST_REQUEST,
  FETCH_PODCASTS_LIST_SUCCESS,
} from '../../store/actionTypes'
import {
  FetchPodcastsListFailure,
  FetchPodcastsListFailurePayload,
  FetchPodcastsListRequest,
  FetchPodcastsListSuccess,
  FetchPodcastsListSuccessPayload,
} from './types'

export const fetchPodcastsListRequest = (): FetchPodcastsListRequest => ({
  type: FETCH_PODCASTS_LIST_REQUEST,
})

export const fetchPodcastsListSuccess = (
  payload: FetchPodcastsListSuccessPayload
): FetchPodcastsListSuccess => ({
  type: FETCH_PODCASTS_LIST_SUCCESS,
  payload,
})

export const fetchPodcastsListFailure = (
  payload: FetchPodcastsListFailurePayload
): FetchPodcastsListFailure => ({
  type: FETCH_PODCASTS_LIST_FAILURE,
  payload,
})
