// import { AxiosResponse } from 'axios'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { FETCH_PODCAST_BY_ID_REQUEST } from '../../store/actionTypes'
import { convertRssStringToEpisodes } from '../../utils/normalize'
import { getPodcasts } from '../podcastsList/selectors'
import { IPodcast } from '../podcastsList/types'
import { fetchPodcastByIdSuccess } from './actions'
// import { normalizePodcasts } from '../../utils/normalize'
import { getEpisodesData, getPodcastDetailById } from './api'
import {
  EpisodeProps,
  FetchPodcastByIdRequest,
  FetchPodcastByIdSuccessPayload,
  IPodcastDetailResponse,
} from './types'

function* fetchPodcastByIdSaga(action: FetchPodcastByIdRequest) {
  try {
    const { payload: podcastId } = action
    const response: IPodcastDetailResponse = yield call(
      getPodcastDetailById,
      podcastId
    )
    console.log(response.results[0].feedUrl)
    const rssString: string = yield call(
      getEpisodesData,
      response.results[0].feedUrl
    )
    const episodes: EpisodeProps[] = convertRssStringToEpisodes(rssString)

    const podcastList: IPodcast[] = yield select(getPodcasts)
    const podcast = podcastList.find(
      (podcastData) => podcastData.id === podcastId
    )
    if (!podcast) return

    const successPayload = {} as FetchPodcastByIdSuccessPayload
    successPayload[podcastId] = {
      ...podcast,
      episodes: [...episodes],
    }

    yield put(fetchPodcastByIdSuccess(successPayload))
  } catch (e) {
    if (e instanceof Error) {
      // yield put(
      //   fetchPodcastsListFailure({
      //     error: e?.message as string,
      //   })
      // )
    }
  }
}

export function* podcastDetailsSaga() {
  yield all([takeLatest(FETCH_PODCAST_BY_ID_REQUEST, fetchPodcastByIdSaga)])
}
