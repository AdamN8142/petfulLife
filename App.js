import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { BackgroundImage } from './Components/BackgroundImage';
import { Home } from './Screens/Home';
import { AddViewScan } from './Screens/AddViewScan'
import { AddPet } from './Screens/AddPet' 


const AppNavigator = createStackNavigator({
  home: Home,
  AddViewScan: AddViewScan,
  BackgroundImage: BackgroundImage,
  AddPet: AddPet
})

const AppContainer = createAppContainer(AppNavigator);


 export default class App extends Component{
  render() {
    return (
      <AppContainer />
    )
  };
}




