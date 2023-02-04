import { createSelector } from 'reselect'
import { AppState } from '../../store/rootReducer'

const getIsLoading = (state: AppState) => state.podcasts.isLoading

export const getPodcasts = (state: AppState) => state.podcasts.podcasts

const getError = (state: AppState) => state.podcasts.error

const getTimestamp = (state: AppState) => state.podcasts.timestamp

export const getPodcastsSelector = createSelector(
  getPodcasts,
  (podcasts) => podcasts
)

export const getPodcastsIsLoadingSelector = createSelector(
  getIsLoading,
  (isLoading) => isLoading
)

export const getErrorSelector = createSelector(getError, (error) => error)

export const getTimestampSelector = createSelector(
  getTimestamp,
  (timestamp) => timestamp
)
