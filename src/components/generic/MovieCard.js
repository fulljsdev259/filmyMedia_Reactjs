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

const MovieCard = ({navigation, moviesList, handlePage, pageNo}) => {
  const _renderItem = (item, index) => {
    const listItem = item.item;
    //action to check the index is even
    function checkIndexIsEven(n) {
      return n % 2 == 0;
    }

    return (
      <View
        style={[
          styles.contentView,
          {marginRight: checkIndexIsEven(index) ? 0 : '4%'},
        ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate('MovieDetails', {movieId: listItem.id})
          }>
          <View style={styles.imgWrapper}>
            <Image
              resizeMode="cover"
              style={styles.img}
              source={{uri: IMAGE_BASE_URL + listItem.poster_path}}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.movieTitleView}>
          <Text style={[styles.titleText, styles.titleTextSize]}>
            {listItem.title}
          </Text>
          <Text style={[styles.titleTextSize, styles.textColor]}>
            ({listItem.vote_average})
          </Text>
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.decriptionText, styles.textColor]}>
          {listItem.overview}
        </Text>
      </View>
    );
  };

  const _keyExtractor = (item, index) => index.toString();
  return (
    <>
      <FlatList
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        data={moviesList}
        renderItem={_renderItem}
        numColumns={2}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
      <NextPrePage pageNo={pageNo} handlePage={handlePage} pageFor={'movieList'} />
    </>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  contentView: {
    width: '48%',
  },
  flatlist: {
    width: '92%',
    alignSelf: 'center',
    paddingTop: 15,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgWrapper: {
    width: '100%',
    height: DeviceInfo.width * 0.44,
    marginBottom: 5,
  },
  movieTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  seperator: {
    height: DeviceInfo.hp('4.3%'),
  },
  titleText: {
    color: COLORS.blue,
    width: '80%',
    flexWrap: 'wrap',
  },
  titleTextSize: {
    fontSize: DeviceInfo.hp('1.4%'),
  },
  decriptionText: {
    fontSize: DeviceInfo.hp('1.2%'),
  },
  textColor: {
    color: COLORS.grey,
  },
});
