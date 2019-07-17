import React, { Component }from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BackgroundImage} from '../Components/BackgroundImage'


export class Home extends Component {
  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.header}>PetFul Life</Text>
      <Text>A price comparison app for all your pet product needs!</Text>
      <Button
        onPress={() => this.props.navigation.navigate('AddViewScan')}
        title="Enter App!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex:1,
    height:'100%',
    width: '100%'
  },
  header: {
    fontSize: 44,
    position: 'relative',
    marginBottom: 2
  }
});