//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';

import BookTransactionScreen from './Screens/BookTransactionScreen';
import SearchScreen from './Screens/SearchScreen';


export default class App extends React.Component() {
  render (){
<AppContainer/> 
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransactionScreen},
  Search:{screen:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
