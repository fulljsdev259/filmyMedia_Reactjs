import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import COLORS from '../../utiles/colors';

export default function Loader({message, isLoading}) {
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={COLORS.grey} />
      </View>
    );
  } else if (message !== '') {
    return (
      <View style={styles.loader}>
        <Text>{message}</Text>
      </View>
    );
  } else return null;
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
