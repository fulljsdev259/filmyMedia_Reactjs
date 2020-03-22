import * as actions from '../actions';
import fireAjax from '../../services/index';
import {call, put} from 'redux-saga/effects';
import {API_KEY} from '../../config';

//function to get movies list
export function* getMoviesListRequest(action) {
  try {
    const response = yield call(
      fireAjax,
      'GET',
      `movie/upcoming?api_key=${API_KEY}&page=${action.payload.pageNo}`,
      '',
    );    
    if (response) {
      yield put(actions.getMoviesListSuccess(response.data));
    }
  } catch (e) {
    yield put(actions.getMoviesListError());
  }
}

//function to get movie details
export function* getMovieDetailsRequest(action) {
  try {
    const response = yield call(
      fireAjax,
      'GET',
      `movie/${action.payload.movieId}?api_key=${API_KEY}`,
      '',
    );
    if (response) {
      yield put(actions.getMovieDetailsSuccess(response.data));
    }
  } catch (e) {
    yield put(actions.getMovieDetailsError());
  }
}

//function to search movies
export function* searchMoviesRequest(action) {  
  try {
    const response = yield call(
      fireAjax,
      'GET',
      `search/movie?api_key=${API_KEY}&query=${action.payload.query}&page=${action.payload.pageNo}`,
      '',
    );    
    if (response) {
      yield put(actions.searchMoviesSuccess(response.data));
    }
  } catch (e) {
    yield put(actions.searchMoviesError());
  }
}

//function to clear the search query
export function* clearSearchMoviesRequest(action) {
  yield put(actions.clearSearchMoviesSuccess());
}