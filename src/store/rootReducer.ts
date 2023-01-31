import { combineReducers } from 'redux'
import { podcastsReducer } from '../redux-modules'

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  // details: loginReducer,
  // chapters: inputFieldsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
