import {takeLatest, takeEvery, all} from 'redux-saga/effects';
import * as constants from './constant';
import {
  getMoviesListRequest,
  getMovieDetailsRequest,
  searchMoviesRequest,
  clearSearchMoviesRequest
} from './movies/action';

export function* watchActions() {
  yield takeLatest(constants.GET_MOVIES_LIST_REQUEST, getMoviesListRequest);
  yield takeLatest(constants.GET_MOVIE_DETAILS_REQUEST, getMovieDetailsRequest);
  yield takeLatest(constants.SEARCH_MOVIES_REQUEST, searchMoviesRequest);
  yield takeLatest(constants.CLEAR_SEARCH_MOVIES_REQUEST, clearSearchMoviesRequest);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
