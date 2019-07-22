import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { fetchData, fetchPost } from '../Utils/fetchCalls';

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

  handleDelete(id){
    this.deleteFetch(id)
    let keepPets = this.state.pets.filter(pet => {
      return pet.id !== id
    })

    this.setState({ pets: keepPets });
  }

  deleteFetch = (id) => {
    let url =  `http://localhost:3000/api/v1/users/1/pets/${id}`
    const options =  {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetchPost(url, options)
    .then(response => console.log(response))
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
            <Button style={styles.button} data={pet.id}
              onPress={() => this.props.navigation.navigate('ViewProducts', {
                 pet: pet
              })}
              title="View Products!" />
            <Button 
              data={pet.id}
              style={styles.delete} 
              title="Delete Pet Profile" 
              onPress={this.handleDelete.bind(this, pet.id)}
              />
            </View>
          </View>   
        )      
    })
      
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.submit}>
          <Button 
            accessibilityLabel="Click to view all products"
            title="View All Products"
            color='#fff'
            onPress={() => this.props.navigation.navigate('ViewProducts')}/>
        </View>
          {this.makePetProfiles()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1EB080',
    borderRadius: 3,
    height: 50,
    width: 298,
    padding: 5
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
  submit: {
    margin: 10,
    borderWidth: 2,
    borderColor: '#1EB080',
    backgroundColor: '#1EB080',
    height: 40,
    width: '70%',
    alignSelf:'center',
  },
});