import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { fetchData } from '../Utils/fetchCalls';

export class ViewPets extends Component {
  constructor() {
    super();
    this.state = {
      pets: []
    }
  }

  componentDidMount = () => {
    let url = 'http://localhost:3000/api/v1/users/1/pets' 
    fetchData(url)
    .then(response => this.setPets(response.data.attributes.pets))
    .catch(error => console.log(error))
  }

  setPets = (pets) => { 
    this.setState({ pets })
  }

  makePetProfiles = () => {
    if (this.state.pets.length) {
    return this.state.pets.map((pet) => {
      console.log('here is a pet name', pet.name)
      return (
          <View>
              <Text style={styles.name}>{pet.name}</Text>
          </View>
            
        )
            
    })
      
    }
  }

  

  render() {
    return (
      <View>
        {this.makePetProfiles()}
      </View>
      
      
    
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1EB080',
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
    backgroundColor: '#CCDBD6',
    borderWidth: 1,
    height: 200,
    marginTop: 35,
    width: 300,
    borderRadius: 3,
    padding: 10,
    flexDirection: 'row'
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