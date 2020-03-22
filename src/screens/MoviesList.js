import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../components/generic/Header';
import MovieCard from '../components/generic/MovieCard';
import {
  getMoviesListRequest,
  searchMoviesRequest,
  clearSearchMoviesRequest,
} from '../redux/actions';
import Loader from './../components/generic/Loader';
import {debounce} from 'underscore';
import SearchMovies from '../components/generic/SearchMovies';

export default function MoviesList(props) {
  const dispatch = useDispatch();
  const moviesList = useSelector(state => state.movies.moviesList);
  const searchedMovies = useSelector(state => state.movies.searchedMovies);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(getMoviesListRequest({pageNo: 1}));
  }, []);

  function handleSearch(query) {
    setQuery(query);
    const payload = {
      query,
      pageNo: 1,
    };
    debounce(dispatch(searchMoviesRequest(payload)), 500);
  }

  function handleClearSearch() {
    setQuery('');
    dispatch(clearSearchMoviesRequest());
  }

  function handlePage(pageNo, pageType, pageFor) {
    const page = pageType === 'next' ? pageNo + 1 : pageNo - 1;
    pageFor === 'movieList' && dispatch(getMoviesListRequest({pageNo: page}));
    pageFor === 'searchList' && dispatch(searchMoviesRequest({pageNo: page, query }));
  }

  return (
    <>
      <Header
        search={true}
        handleSearch={handleSearch}
        query={query}
        handleClearSearch={handleClearSearch}
        isLoading ={searchedMovies.isLoading}
      />
      {(moviesList.isSuccess || searchedMovies.isSuccess) && (
        <View style={styles.container}>
          <SearchMovies
            handlePage={handlePage}
            handleClearSearch={handleClearSearch}
            {...props}
            searchedMovies={searchedMovies}
          />
          <ScrollView>
            <MovieCard
              handlePage={handlePage}
              {...props}
              pageNo={moviesList.pageNo}
              moviesList={moviesList.data}
            />
          </ScrollView>
        </View>
      )}
      <Loader isLoading={moviesList.isLoading} message={moviesList.message} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
