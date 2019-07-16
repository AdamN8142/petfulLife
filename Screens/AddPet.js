import React, { Component }from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export class AddPet extends Component {
  render(){
    return (
    <View style={styles.container}>
      <Text>This is the add a pet screen</Text>
      {/* <Button
        onPress={() => this.props.navigation.navigate('AddViewScan')}
        title="Enter App!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
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
    }
  
  });