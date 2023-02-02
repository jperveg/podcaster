import { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { FETCH_PODCASTS_LIST_REQUEST } from '../../store/actionTypes'
import { normalizePodcasts } from '../../utils/normalize'
import { fetchPodcastsListFailure, fetchPodcastsListSuccess } from './actions'
import { getAllPodcasts } from './api'
import { PodcastResponse } from './types'

function* fetchPodcastsSaga() {
  try {
    const response: AxiosResponse<PodcastResponse> = yield call(getAllPodcasts)
    const allPodcasts = normalizePodcasts(response.data.feed.entry)
    yield put(
      fetchPodcastsListSuccess({
        podcasts: allPodcasts,
      })
    )
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchPodcastsListFailure({
          error: e?.message as string,
        })
      )
    }
  }
}

export function* podcastsSaga() {
  yield all([takeLatest(FETCH_PODCASTS_LIST_REQUEST, fetchPodcastsSaga)])
}
