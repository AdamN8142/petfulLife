import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home } from './assets/Screens/Home';
import { AddViewScan } from './assets/Screens/AddViewScan'


const AppNavigator = createStackNavigator({
  home: Home,
  AddViewScan: AddViewScan
})

const AppContainer = createAppContainer(AppNavigator);


 export default class App extends Component{
  render() {
    return (

      <AppContainer />
  
    )
  };
}




