import React, { Component }from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class AddViewScan extends Component {
  render(){
    return (
    <View style={styles.container}>
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
    backgroundColor: 'grey',
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
    borderRadius: 4
  },
  header: {
    fontSize: 40,
    margin: 0,
    color: 'black'
  }
});