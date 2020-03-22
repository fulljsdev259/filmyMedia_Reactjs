import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import COLORS from '../../utiles/colors';

export default function Header({
  search,
  navigation,
  handleClearSearch,
  handleSearch,
  query,
  isLoading,
}) {
  function goBack() {
    !search && navigation.goBack();
  }
  return (
    <View style={styles.headerContainer}>
      <View
        style={[
          styles.searchWrapper,
          {backgroundColor: search ? COLORS.disable : 'transparent'},
        ]}>
        <TouchableOpacity disabled={search} onPress={() => goBack()}>
          <Image
            resizeMode="contain"
            style={styles.searchImg}
            source={
              search
                ? require('../../assets/search-icon.png')
                : require('../../assets/back.png')
            }
          />
        </TouchableOpacity>
        {!search && <Text style={styles.backText}>Back</Text>}
        {search && (
          <TextInput
            onChangeText={query => handleSearch(query)}
            textAlignVertical="top"
            style={styles.textInput}
            placeholder="Search"
            value={query}
          />
        )}
        {isLoading && (
          <View style={styles.pr}>
            <ActivityIndicator size="small" color={COLORS.black} />
          </View>
        )}
        {!isLoading && search && query !== '' && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handleClearSearch()}>
            <Text style={styles.closeSearchText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal: 12,
    backgroundColor: COLORS.offWhite,
    paddingVertical: 8,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 8,
    paddingRight: 0,
    borderRadius: 10,
  },
  searchImg: {
    width: 20,
    height: 20,
  },
  textInput: {
    padding: 0,
    includeFontPadding: false,
    textAlignVertical: 'top',
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  backText: {
    fontSize: 18,
    marginLeft: 10,
  },
  closeSearchText: {
    fontSize: 18,
    paddingRight: 10,
  },
  closeTouch: {
    backgroundColor: COLORS.black,
  },
  pr:{
    paddingRight:10
  }
});
