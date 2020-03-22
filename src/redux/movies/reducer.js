import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../constant';
import dataFormattor from '../../utiles/dateFormattor';

const initialState = {
  moviesList: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: [],
    pageNo:'',
    message: '',
  },
  movieDetails: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: [],
    message: '',
  },
  searchedMovies: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: [],
    message: '',
    pageNo:'',
  },
};

//functions to get the list of movies
const getMoviesListRequest = (state, action) => {
  return update(state, {
    moviesList: {
      isLoading: {$set: true},
      isError: {$set: false},
      isSuccess: {$set: false},
      data: {$set: []},
      message: {$set: ''},
    },
  });
};

const getMoviesListSuccess = (state, action) => {
  let data = [],
    message = '';
  if (action.payload.results && action.payload.results.length) {
    data = action.payload.results.sort(
      (a, b) =>
        dataFormattor(b.release_date).newDate -
        dataFormattor(a.release_date).newDate
    );
  } else {
    message = 'Movies not available';
  }
  return update(state, {
    moviesList: {
      isLoading: {$set: false},
      isError: {$set: data.length ? false : true},
      isSuccess: {$set: data.length ? true : false},
      data: {$set: data},
      pageNo:{$set:action.payload.page},
      message: {$set: message},
    },
  });
};

const getMoviesListError = (state, action) => {
  return update(state, {
    moviesList: {
      isLoading: {$set: false},
      isError: {$set: true},
      isSuccess: {$set: false},
      data: {$set: []},
      message: {$set: 'Error Occurred'},
    },
  });
};
//end

//functions to get the details of a movie
const getMovieDetailsRequest = (state, action) => {
  return update(state, {
    movieDetails: {
      isLoading: {$set: true},
      isError: {$set: false},
      isSuccess: {$set: false},
      data: {$set: []},
      message: {$set: ''},
    },
  });
};

const getMovieDetailsSuccess = (state, action) => {
  return update(state, {
    movieDetails: {
      isLoading: {$set: false},
      isError: {$set: false},
      isSuccess: {$set: true},
      data: {$set: action.payload},
      message: {$set: ''},
    },
  });
};

const getMovieDetailsError = (state, action) => {
  return update(state, {
    movieDetails: {
      isLoading: {$set: false},
      isError: {$set: true},
      isSuccess: {$set: false},
      data: {$set: []},
      message: {$set: 'Error Occurred'},
    },
  });
};
//end

//functions to search movies online
const searchMoviesRequest = (state, action) => {  
  return update(state, {
    searchedMovies: {
      isLoading: {$set: true},
      isError: {$set: false},
      isSuccess: {$set: false},
      data: {$set: state.searchedMovies.data},
      message: {$set: ''},
    },
  });
};

const searchMoviesSuccess = (state, action) => {
  let data = [],
    message = '';
  if (action.payload.results && action.payload.results.length) {
    data = action.payload.results;
  } else {
    message = action.payload.message || 'No related result';
  }
  return update(state, {
    searchedMovies: {
      isLoading: {$set: false},
      isError: {$set: false},
      isSuccess: {$set: true},
      data: {$set: data},
      message: {$set: message},
      pageNo:{$set:action.payload.page},
    },
  });
};

const searchMoviesError = (state, action) => {
  return update(state, {
    searchedMovies: {
      isLoading: {$set: false},
      isError: {$set: true},
      isSuccess: {$set: false},
      data: {$set: []},
      message: {$set: 'Error Occurred'},
    },
  });
};
//end

//function to clear search query
const clearSearchMoviesSuccess = (state, action) => {
  return update(state, {
    searchedMovies: {
      isLoading: {$set: false},
      isError: {$set: false},
      isSuccess: {$set: false},
      data: {$set: []},
      message: {$set: ''},
    },
  });
};

export default handleActions(
  {
    [constants.GET_MOVIES_LIST_REQUEST]: getMoviesListRequest,
    [constants.GET_MOVIES_LIST_SUCCESS]: getMoviesListSuccess,
    [constants.GET_MOVIES_LIST_ERROR]: getMoviesListError,

    [constants.GET_MOVIE_DETAILS_REQUEST]: getMovieDetailsRequest,
    [constants.GET_MOVIE_DETAILS_SUCCESS]: getMovieDetailsSuccess,
    [constants.GET_MOVIE_DETAILS_ERROR]: getMovieDetailsError,

    [constants.SEARCH_MOVIES_REQUEST]: searchMoviesRequest,
    [constants.SEARCH_MOVIES_SUCCESS]: searchMoviesSuccess,
    [constants.SEARCH_MOVIES_ERROR]: searchMoviesError,

    [constants.CLEAR_SEARCH_MOVIES_SUCCESS]: clearSearchMoviesSuccess,
  },
  initialState,
);
