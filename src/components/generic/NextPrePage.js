import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import DeviceInfo from '../../utiles/deviceInfo';

export default function NextPrePage({pageNo, handlePage, pageFor}) {
  return (
    <View
      style={[
        styles.pageView,
        {justifyContent: pageNo === 1 ? 'flex-end' : 'space-between'},
      ]}>
      {pageNo > 1 && (
        <TouchableOpacity
          style={styles.btnTouch}
          onPress={() => handlePage(pageNo, 'pre', pageFor)}
          activeOpacity={0.5}>
          <Image
            resizeMode="contain"
            style={styles.searchImg}
            source={require('../../assets/back.png')}
          />
          <Text style={[styles.pageText, {marginLeft: 10}]}>Previous Page</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.btnTouch}
        onPress={() => handlePage(pageNo, 'next', pageFor)}
        activeOpacity={0.5}>
        <Text style={styles.pageText}>Next Page</Text>
        <Image
          resizeMode="contain"
          style={[styles.searchImg, styles.rotateImg]}
          source={require('../../assets/back.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  searchImg: {
    width: 15,
    height: 15,
  },
  btnTouch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rotateImg: {
    transform: [{rotateY: '-180deg'}],
    marginLeft: 10,
  },
  pageText: {
    fontSize: DeviceInfo.hp('1.5%'),
  },
});
