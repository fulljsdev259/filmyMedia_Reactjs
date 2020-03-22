import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DeviceInfo from '../../utiles/deviceInfo';
import COLORS from '../../utiles/colors';
import {IMAGE_BASE_URL} from '../../config';
import NextPrePage from './NextPrePage';

const SearchMovies = ({
  navigation,
  handleClearSearch,
  handlePage,
  searchedMovies,
}) => {
  const _renderItem = (item, index) => {
    const listItem = item.item;

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          handleClearSearch();
          navigation.navigate('MovieDetails', {movieId: listItem.id});
        }}>
        <View style={styles.contentWrapper}>
          <View style={styles.imgView}>
            <Image
              resizeMode="cover"
              style={styles.img}
              source={{uri: IMAGE_BASE_URL + listItem.poster_path}}
            />
          </View>
          <View style={styles.movieInfo}>
            <View>
              <Text style={styles.titleText}>
                {listItem.title} ({listItem.vote_average})
              </Text>
              <View style={{height: 8}} />
              <Text
                style={styles.titleTextSize}
                numberOfLines={1}
                ellipsizeMode="tail">
                {listItem.overview}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const _keyExtractor = (item, index) => index.toString();

  if (searchedMovies.data.length) {
    return (
      <View style={styles.wrapper}>
        {/* {searchedMovies.data.length > 0 ? ( */}
        <>
          <FlatList
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={searchedMovies.data}
            renderItem={_renderItem}
            numColumns={1}
            keyExtractor={_keyExtractor}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
          />
          <NextPrePage
            pageFor="searchList"
            handlePage={handlePage}
            pageNo={searchedMovies.pageNo}
          />
        </>
      </View>
    );
  } else if (searchedMovies.message) {
    return (
      <View style={styles.wrapper}>
        <Text>{searchedMovies.message}</Text>
      </View>
    );
  } else return null;
};

export default SearchMovies;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.disable,
  },
  imgView: {
    width: DeviceInfo.width * 0.18,
    height: DeviceInfo.width * 0.18,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0.3,
    borderColor: COLORS.disable,
  },
  movieInfo: {
    width: DeviceInfo.width * 0.72,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  seperator: {
    height: 10,
  },
  titleText: {
    color: COLORS.blue,
    flexWrap: 'wrap',
  },
  titleTextSize: {
    fontSize: DeviceInfo.hp('1.4%'),
    flexWrap: 'wrap',
    flex: 1,
  },
});
