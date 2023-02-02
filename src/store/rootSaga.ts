import { all, fork } from 'redux-saga/effects'
import { podcastDetailsSaga, podcastsSaga } from '../redux-modules'

export function* rootSaga() {
  yield all([fork(podcastsSaga), fork(podcastDetailsSaga)])
}
