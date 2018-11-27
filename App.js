import React, { Component } from 'react';

import { Navigation } from 'react-native-navigation';
import LandingScreen from './src/screens/index';
import ScreenA from './src/screens/ScreenA';
import ScreenB from './src/screens/SacreenB';
import { Provider } from "react-redux";

import configureStore  from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('OrderOnlineScreen.LandingScreen', () => LandingScreen);
Navigation.registerComponentWithRedux('OrderOnlineScreen.SecondScreen', () => ScreenA, Provider, store);
Navigation.registerComponentWithRedux('OrderOnlineScreen.ThirdScreen', () => ScreenB, Provider, store);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'OrderOnlineScreen.LandingScreen'
      }
    }
  });
});