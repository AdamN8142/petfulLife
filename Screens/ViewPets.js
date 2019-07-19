import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
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

  handleDelete = (e, pet) => {
    console.log('target', e.target)
  }

  makePetProfiles = () => {
    if (this.state.pets.length) {
    return this.state.pets.map((pet) => {
      return (
          <View key={pet.id} style={styles.product}>
            <View style={styles.header}>
              <Text style={styles.name}>{pet.name}</Text>
            </View>
            <View>
              <Text style={styles.nickName}>{pet.nickname}</Text>
              <Text style={styles.breed}>{pet.breed}</Text>
            <Button style={styles.button} key={pet.id}
              onPress={() => this.props.navigation.navigate('ViewProducts')}
              title="View Products!" />
            <Button style={styles.delete} 
              title="Delete Pet Profile" 
              onPress={this.handleDelete} />
            </View>
          </View>    
        )      
    })
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.makePetProfiles()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  constainer: {
    overflow: 'scroll'
  },
  header: {
    backgroundColor: '#1EB080',
    borderRadius: 3,
    height: 50,
    width: 298,
    padding: 5
  },
  button: {

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
    fontSize:20,
    fontWeight: "600",
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
    flexDirection: 'column'
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