import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieDetailsRequest} from '../redux/actions';
import Header from '../components/generic/Header';
import COLORS from '../utiles/colors';
import DeviceInfo from '../utiles/deviceInfo';
import Loader from '../components/generic/Loader';
import {IMAGE_BASE_URL} from '../config';
import dataFormattor from '../utiles/dateFormattor';

export default function MovieDetails({navigation, route}) {
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.movies.movieDetails);

  useEffect(() => {
    const {movieId} = route.params;
    dispatch(getMovieDetailsRequest({movieId}));
  }, []);
  return (
    <View style={styles.container}>
      <Header search={false} navigation={navigation} />
      {movieDetails.isSuccess && (
        <ScrollView>
          <View style={styles.contentWrapper}>
            <View style={styles.imgView}>
              <Image
                style={styles.img}
                resizeMode="cover"
                source={{uri: IMAGE_BASE_URL + movieDetails.data.poster_path}}
              />
            </View>
            <Text style={styles.movieTitleText}>
              {movieDetails.data.title}{' '}
              <Text style={styles.textColor}>
                ({movieDetails.data.vote_average})
              </Text>
            </Text>
            <View style={styles.movieReleaseInfoView}>
              <Text style={[styles.textColor, styles.movieReleaseInfoText]}>
                {dataFormattor(movieDetails.data.release_date).year} |{' '}
                {movieDetails.data.runtime} Mins | Director
              </Text>
              <Text style={[styles.textColor, styles.movieReleaseInfoText]}>
                Cast: Actor 1, Actor 2, ...
              </Text>
            </View>
            <Text style={[styles.textColor, styles.movieReleaseInfoText]}>
              {movieDetails.data.overview}
            </Text>
          </View>
        </ScrollView>
      )}
      <Loader
        isLoading={movieDetails.isLoading}
        message={movieDetails.message}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentWrapper: {
    padding: 15,
  },
  imgView: {
    width: '100%',
    height: DeviceInfo.width,
  },
  img: {
    width: '100%',
    height: '100%',
    borderWidth: 0.3,
    borderColor: COLORS.disable,
  },
  textColor: {
    color: COLORS.grey,
  },
  movieTitleText: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: DeviceInfo.hp('1.8%'),
  },
  movieReleaseInfoView: {
    marginBottom: DeviceInfo.hp('1.8%'),
  },
  movieReleaseInfoText: {
    fontSize: 17,
  },
});
