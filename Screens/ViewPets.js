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
          <View style={styles.pic}>
          <Image style={styles.picture} source={require('../Images/dogFood.png')}/>
          </View>
          <View style={styles.info}>
            <Text style={styles.productName}>Puppy Chow</Text>
            <Text style={styles.desriptions}>5.00</Text>
            <Text style={styles.desriptions}>Good Boy Toy</Text>
            <Text style={styles.desriptions}>12.24</Text>
          </View>
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
    height: 200,
    marginTop: 35,
    width: 300,
    borderRadius: 3,
    padding: 10,
    flexDirection: 'row',
  },
  picture: {
    width: 100,
    height: 120,
    borderRadius: 2,
  },
  productName: {
    fontSize:20,
    fontWeight: "600",
  },
  desriptions: {
    fontSize:15,
  },
  info: {
    width: '50%'
  },
  pic: {
    width: '50%'

  }
});