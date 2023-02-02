import { all, fork, take } from 'redux-saga/effects'
import { podcastDetailsSaga, podcastsSaga } from '../redux-modules'
import { REHYDRATE } from 'redux-persist/lib/constants'

export function* rootSaga() {
  yield take(REHYDRATE)
  yield all([fork(podcastsSaga), fork(podcastDetailsSaga)])
}
