import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigator from './routes/homeStack'

import * as Font from 'expo-font';

const getFonts = () => {
    return Font.loadAsync({
	'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
	'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    });
};

export default function App() {
  return (
      <NavigationContainer>
          <Navigator />
      </NavigationContainer>
  );
};
