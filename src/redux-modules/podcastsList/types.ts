import {
  FETCH_PODCASTS_LIST_FAILURE,
  FETCH_PODCASTS_LIST_REQUEST,
  FETCH_PODCASTS_LIST_SUCCESS,
} from '../../store/actionTypes'

export interface FetchPodcastsListRequest {
  type: typeof FETCH_PODCASTS_LIST_REQUEST
}

export interface IPodcast {
  author: string
  summary: string
  image: string
  title: string
  id: string
  link: string
  releaseDate: string
}

export interface IPodcastsList {
  podcasts: Array<IPodcast>
}

export interface IPodcastsState extends IPodcastsList {
  isLoading: boolean
  error: string | null
}

export type FetchPodcastsListSuccessPayload = IPodcastsList

export interface FetchPodcastsListSuccess {
  type: typeof FETCH_PODCASTS_LIST_SUCCESS
  payload: FetchPodcastsListSuccessPayload
}

export interface FetchPodcastsListFailurePayload {
  error: string
}

export interface FetchPodcastsListFailure {
  type: typeof FETCH_PODCASTS_LIST_FAILURE
  payload: FetchPodcastsListFailurePayload
}

export type PodcastsActions =
  | FetchPodcastsListRequest
  | FetchPodcastsListSuccess
  | FetchPodcastsListFailure

type itemFromItunes = Record<string, string>

export interface IPodcastFromITunes {
  'im:name': itemFromItunes
  summary: itemFromItunes
  title: itemFromItunes
  id: Record<string, itemFromItunes>
  link: Record<string, itemFromItunes>
  'im:artist': itemFromItunes
  'im:releaseDate': itemFromItunes
  'im:image': itemFromItunes[]
}

export interface PodcastResponse {
  feed: {
    entry: Array<IPodcastFromITunes>
  }
}
