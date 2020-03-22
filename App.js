/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Navigation from './src/components/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaView>
    </>
  );
};


export default App;
