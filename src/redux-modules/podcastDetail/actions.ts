import {
  FETCH_PODCAST_BY_ID_FAILURE,
  FETCH_PODCAST_BY_ID_REQUEST,
  FETCH_PODCAST_BY_ID_SUCCESS,
} from '../../store/actionTypes'
import {
  FetchPodcastByIdFailure,
  FetchPodcastByIdFailurePayload,
  FetchPodcastByIdRequest,
  FetchPodcastByIdSuccess,
  FetchPodcastByIdSuccessPayload,
} from './types'

export const fetchPodcastByIdRequest = (
  podcastId: string
): FetchPodcastByIdRequest => ({
  type: FETCH_PODCAST_BY_ID_REQUEST,
  payload: podcastId,
})

export const fetchPodcastByIdSuccess = (
  payload: FetchPodcastByIdSuccessPayload
): FetchPodcastByIdSuccess => ({
  type: FETCH_PODCAST_BY_ID_SUCCESS,
  payload,
})

export const fetchPodcastByIdFailure = (
  payload: FetchPodcastByIdFailurePayload
): FetchPodcastByIdFailure => ({
  type: FETCH_PODCAST_BY_ID_FAILURE,
  payload,
})
