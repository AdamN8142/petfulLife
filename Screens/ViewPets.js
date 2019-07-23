import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { fetchData, fetchPost } from '../Utils/fetchCalls';
import { BackgroundProfile} from '../Components/BackgroundProfile'

export class ViewPets extends Component {
  constructor() {
    super();
    this.state = {
      pets: []
    }
  }

  componentDidMount = () => {
    let url = 'http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets' 
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
    let url =  `http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets/${id}`
    const options =  {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetchPost(url, options)
    .then(response => console.log('in the view pets', response))
  }

  makePetProfiles = () => {
    if (this.state.pets.length) {
      return this.state.pets.map((pet) => {
        return (
          <View key={pet.id} style={styles.pet}>
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
        <BackgroundProfile style={styles.backgroundImage} />
        <View style={styles.submit}>
          <Button 
            accessibilityLabel="Click for more infomration on your pets products"
            title="View Your Products"
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
  pet: {
    alignSelf:'center',
    borderColor: 'black',
    backgroundColor: '#CCDBD6',
    borderWidth: 1,
    height: 200,
    marginTop: 35,
    width: 300,
    borderRadius: 3,
    flexDirection: 'column',
    opacity: .8
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
  backgroundImage: {
    resizeMode: 'cover',
    position:'absolute'
  }
});