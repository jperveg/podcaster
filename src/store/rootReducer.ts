import { combineReducers } from 'redux'
import { podcastDetailsReducer, podcastsReducer } from '../redux-modules'

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  details: podcastDetailsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
