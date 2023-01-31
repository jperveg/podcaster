import { all, fork } from 'redux-saga/effects'
import podcastsSaga from '../redux-modules/podcastsList/sagas'

export function* rootSaga() {
  yield all([fork(podcastsSaga)])
}
