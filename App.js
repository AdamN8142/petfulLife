import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home } from './Screens/Home';
import { AddViewScan } from './Screens/AddViewScan'
import { BackgroundImage } from './Components/BackgroundImage';


const AppNavigator = createStackNavigator({
  home: Home,
  AddViewScan: AddViewScan,
  BackgroundImage: BackgroundImage
})

const AppContainer = createAppContainer(AppNavigator);


 export default class App extends Component{
  render() {
    return (

      <AppContainer />
  
    )
  };
}




