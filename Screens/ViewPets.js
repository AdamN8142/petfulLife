import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class ViewPets extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.animal} source={require('../Images/pups.jpg')} />
        <View style={styles.body}>
            <Text style={styles.name}>SPOT</Text>
            <Text style={styles.nickName}>GOOD BOY</Text>
            <Text style={styles.breed}>Golden Retriever</Text>
          <View style={styles.product}>
            <Text>Puppy Chow</Text>
            <Text>5.00</Text>
            <Text>Good Boy Toy</Text>
            <Text>12.24</Text>
          </View>
        </View>
      </View>
    
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    height: 150,
  },
  animal: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 3,
    borderColor: '#FFF',
    marginBottom: 10, 
    alignSelf:'center',
    position: 'absolute',
    marginTop:90,
  },
  body:{
    marginTop:50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:130,
  },
  name:{
    alignSelf:'center',
    fontSize:28,
    fontWeight: "600",
    marginBottom: 7,
    marginTop: 30,
  },
  nickName: {
    alignSelf:'center',
    marginBottom: 5,
  },
  breed:  {
    alignSelf:'center',
  },
  product: {
    alignSelf:'center',
    borderColor: 'black',
    borderWidth: 1,
    height: 70,
    marginTop: 20
  }
});