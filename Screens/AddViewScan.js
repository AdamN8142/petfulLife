import React, { Component }from 'react';
import { StyleSheet, ImageBackground,  Text, View, Button } from 'react-native';
import { BackgroundImage} from '../Components/BackgroundImage'
import { opaqueType } from '@babel/types';


export class AddViewScan extends Component {
  render(){
    return (
      <View style={styles.container}>
      <BackgroundImage style={styles.backgroundImage} />
      <Text style={styles.header} >PetfulLife</Text>
      <View style={styles.button}>
      <Button
        title="ADD A PET"
        color="white"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
      <View style={styles.button}>
      <Button
        title="VIEW YOUR PETS"
        color="white"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
      <View style={styles.button}>
      <Button
        title="SCAN/SEARCH A PRODUCT"
        color="white"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: 70,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    backgroundColor: "#B0E0E6",
    borderRadius: 4,
    opacity: .8
  },
  header: {
    fontSize: 60,
    color: 'white'
  },
  backgroundImage: {
    resizeMode: 'cover',
    position:'absolute'

  }
});