import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class ViewPets extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>DOG NAME</Text>
        <Text>DOG NICKJNAME</Text>
        <Text>DOG BREED</Text>
          <View>
            <Text>Puppy Chow</Text>
            <Text>5.00</Text>
            <Text>Good Boy Toy</Text>
            <Text>12.24</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});