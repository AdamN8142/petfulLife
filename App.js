import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { BarcodeScanner } from './Components/BarcodeScanner'
import { Home } from './Screens/Home';
import { AddViewScan } from './Screens/AddViewScan'
import { AddPet } from './Screens/AddPet' 
import { ViewPets } from './Screens/ViewPets'
import { ViewProducts } from './Screens/ViewProducts'


const AppNavigator = createStackNavigator({
  home: Home,
  AddViewScan: AddViewScan,
  AddPet: AddPet,
  ViewPets: ViewPets,
  BarcodeScanner: BarcodeScanner,
  ViewProducts: ViewProducts
})

const AppContainer = createAppContainer(AppNavigator);


 export default class App extends Component{
  render() {
    return (
      <AppContainer />
    )
  };
}




