import {
  FETCH_PODCASTS_LIST_REQUEST,
  FETCH_PODCASTS_LIST_SUCCESS,
  FETCH_PODCASTS_LIST_FAILURE,
} from '../../store/actionTypes'
import { getTimeTomorrow } from '../../utils/dateUtils'

import { IPodcastsState, PodcastsActions } from './types'

const initialState: IPodcastsState = {
  isLoading: false,
  podcasts: [],
  error: null,
  timestamp: null,
}

export const podcastsReducer = (
  state = initialState,
  action: PodcastsActions
) => {
  switch (action.type) {
    case FETCH_PODCASTS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        timestamp: null,
      }
    case FETCH_PODCASTS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        podcasts: action.payload.podcasts,
        error: null,
        timestamp: getTimeTomorrow(),
      }
    case FETCH_PODCASTS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        podcasts: [],
        error: action.payload.error,
        timestamp: null,
      }
    default:
      return state
  }
}
