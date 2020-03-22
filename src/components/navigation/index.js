import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesList from '../../screens/MoviesList';
import MovieDetails from '../../screens/MovieDetails';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MoviesList" >
        <Stack.Screen
          name="MoviesList"
          component={MoviesList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
