import React, { Component }from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableWithoutFeedback } from 'react-native';
import { BackgroundImage} from '../Components/BackgroundImage'
import { opaqueType } from '@babel/types';
import { BarcodeScanner } from '../Components/BarcodeScanner'
 


export class AddViewScan extends Component {
  render(){
    return (
    <View style={styles.container}>
      <BackgroundImage style={styles.backgroundImage} />
      <Text style={styles.header} >PetfulLife</Text>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback 
          onPress={() => this.props.navigation.navigate('AddPet')}
          accessibilityLabel="Add Pet"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>ADD A PET</Text>
          </View>
          
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback 
          onPress={() => this.props.navigation.navigate('ViewPets')}
          accessibilityLabel="View your pets"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>VIEW YOUR PETS</Text>
          </View>
          
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback 
            onPress={() => this.props.navigation.navigate('BarcodeScanner')}
            accessibilityLabel="SCAN/SEARCH A PRODUCT"
        >
          <View style={styles.button}>
              <Text style={styles.buttonText}>SCAN/SEARCH A PRODUCT</Text>
          </View>
          
        </TouchableWithoutFeedback>
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
    width: '60%',
    height: 50,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#00a1ff',
    borderRadius: 4,
    opacity: .8
  },
  buttonText: {
    color: 'white',
    padding: 20
  },
  buttonContainer: {
    margin: 20
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