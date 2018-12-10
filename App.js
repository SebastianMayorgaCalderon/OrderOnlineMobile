import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import LandingScreen from './src/screens/LandingScreen/LandingScreen';
import ScreenA from './src/screens/ScreenA';
import ScreenB from './src/screens/SacreenB';
import CategoriesScreen from './src/screens/CategoriesScreen/CategoriesScreen';
import DishesScreen from './src/screens/DishesScreen/DishesScreen';
import DishDetailScreen from './src/screens/DishDetailScreen/DishDetailScreen';
import OrderScreen from './src/screens/OrderScreen/OrderScreen'

import { Provider } from "react-redux";
import configureStore  from './src/store/configureStore';

import { SCREEN_BASE_NAME } from './src/utility/constants';

const store = configureStore();

Navigation.registerComponentWithRedux(`${SCREEN_BASE_NAME}LandingScreen`, () => LandingScreen, Provider, store);
Navigation.registerComponentWithRedux(`${SCREEN_BASE_NAME}CategoriesScreen`, () => CategoriesScreen, Provider, store);
Navigation.registerComponentWithRedux(`${SCREEN_BASE_NAME}OrdersScreen`,()=>OrderScreen,Provider, store)
Navigation.registerComponentWithRedux(`${SCREEN_BASE_NAME}DishesScreen`, () => DishesScreen, Provider, store);
Navigation.registerComponentWithRedux(`${SCREEN_BASE_NAME}SecondScreen`, () => ScreenA, Provider, store);
Navigation.registerComponentWithRedux(`${SCREEN_BASE_NAME}ThirdScreen`, () => ScreenB, Provider, store);
Navigation.registerComponentWithRedux(`${SCREEN_BASE_NAME}DisheDetailScreen`,()=>DishDetailScreen,Provider, store)


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: `${SCREEN_BASE_NAME}LandingScreen`
      }
    }
  });
});