import { createSelector } from 'reselect'
import { AppState } from '../../store/rootReducer'

const getIsLoading = (state: AppState) => state.details.isLoading

const getDetails = (state: AppState) => state.details.data
const getError = (state: AppState) => state.details.error

export const getPodcastDetailSelector = createSelector(
  getDetails,
  (details) => details
)

export const getPodcastDetailIsLoadingSelector = createSelector(
  getIsLoading,
  (isLoading) => isLoading
)

export const getPodcastDetailsErrorSelector = createSelector(
  getError,
  (error) => error
)
