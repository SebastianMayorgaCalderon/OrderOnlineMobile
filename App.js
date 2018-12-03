import React, { Component } from 'react';

import { Navigation } from 'react-native-navigation';
import LandingScreen from './src/screens/LandingScreen/LandingScreen';
import ScreenA from './src/screens/ScreenA';
import ScreenB from './src/screens/SacreenB';
import CategoriesScreen from './src/screens/CategoriesScreen/CategoriesScreen';
import DishesScreen from './src/screens/DishesScreen/DishesScreen';

import { Provider } from "react-redux";

import configureStore  from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponentWithRedux('OrderOnlineScreen.LandingScreen', () => LandingScreen, Provider, store);
Navigation.registerComponentWithRedux('OrderOnlineScreen.CategoriesScreen', () => CategoriesScreen, Provider, store);
Navigation.registerComponentWithRedux('OrderOnlineScreen.DishesScreen', () => DishesScreen, Provider, store);
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