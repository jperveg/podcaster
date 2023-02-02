import {
  FETCH_PODCAST_BY_ID_FAILURE,
  FETCH_PODCAST_BY_ID_REQUEST,
  FETCH_PODCAST_BY_ID_SUCCESS,
} from '../../store/actionTypes'
import { IPodcast } from '../podcastsList/types'

export interface FetchPodcastByIdRequest {
  type: typeof FETCH_PODCAST_BY_ID_REQUEST
  payload: string
}

export interface EpisodeProps {
  id: string
  title: string
  description: string
  player: string | null
  pubDate: string
  duration: number
  durationString?: string
  link: string
}
export interface PodcastDetailsProps extends IPodcast {
  episodes: Array<EpisodeProps>
}

export type FetchPodcastByIdSuccessPayload = {
  [k: string]: PodcastDetailsProps
}

export interface FetchPodcastByIdSuccess {
  type: typeof FETCH_PODCAST_BY_ID_SUCCESS
  payload: FetchPodcastByIdSuccessPayload
}

export interface FetchPodcastByIdFailurePayload {
  error: string
}

export interface FetchPodcastByIdFailure {
  type: typeof FETCH_PODCAST_BY_ID_FAILURE
  payload: FetchPodcastByIdFailurePayload
}

interface PodcastDetailsResponseData {
  feedUrl: string
}

export interface IPodcastDetailResponse {
  resultCount: number
  results: Array<PodcastDetailsResponseData>
}

export type PodcastDetailsActions =
  | FetchPodcastByIdRequest
  | FetchPodcastByIdSuccess
  | FetchPodcastByIdFailure

export interface IPodcastDetailsState {
  isLoading: boolean
  error: string | null
  data: FetchPodcastByIdSuccessPayload
}
