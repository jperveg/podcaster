import {
  FETCH_PODCAST_BY_ID_REQUEST,
  FETCH_PODCAST_BY_ID_SUCCESS,
  FETCH_PODCAST_BY_ID_FAILURE,
} from '../../store/actionTypes'

import { IPodcastDetailsState, PodcastDetailsActions } from './types'

const initialState: IPodcastDetailsState = {
  isLoading: false,
  data: {},
  error: null,
}

export const podcastDetailsReducer = (
  state = initialState,
  action: PodcastDetailsActions
) => {
  switch (action.type) {
    case FETCH_PODCAST_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_PODCAST_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: { ...state.data, ...action.payload },
        error: null,
      }
    case FETCH_PODCAST_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
