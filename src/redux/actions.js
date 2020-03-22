import {createAction} from 'redux-actions';
import * as constants from './constant';

//ACTIONS TO GET MOVIES LIST 
export const getMoviesListRequest= createAction(constants.GET_MOVIES_LIST_REQUEST);
export const getMoviesListSuccess = createAction(constants.GET_MOVIES_LIST_SUCCESS);
export const getMoviesListError = createAction(constants.GET_MOVIES_LIST_ERROR);

//ACTIONS TO GET A MOVIE DETAILS 
export const getMovieDetailsRequest= createAction(constants.GET_MOVIE_DETAILS_REQUEST);
export const getMovieDetailsSuccess = createAction(constants.GET_MOVIE_DETAILS_SUCCESS);
export const getMovieDetailsError = createAction(constants.GET_MOVIE_DETAILS_ERROR);

//ACTIONS TO SEARCH MOVIES ONLINE 
export const searchMoviesRequest= createAction(constants.SEARCH_MOVIES_REQUEST);
export const searchMoviesSuccess = createAction(constants.SEARCH_MOVIES_SUCCESS);
export const searchMoviesError = createAction(constants.SEARCH_MOVIES_ERROR);

//ACTIONS TO CLEAR SEARH QUERY
export const clearSearchMoviesRequest= createAction(constants.CLEAR_SEARCH_MOVIES_REQUEST);
export const clearSearchMoviesSuccess = createAction(constants.CLEAR_SEARCH_MOVIES_SUCCESS);