import React, { Component }from 'react';
import { Button, StyleSheet, TextInput, Text, Picker, View } from 'react-native';
import { fetchPost } from '../Utils/fetchCalls';



export class AddPet extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      nickname: '',
      archetype: '',
      breed: '',
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('here is the pet')
    let newPet = this.state
    this.preparePost(newPet)
  }

  preparePost = (pet) => {
    let url = 'http://localhost:3000/api/v1/users/1/pets';
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet)
    }
    fetchPost(url, options)
    .then(response => console.log('in addPet', response))
  }
    
  render(){
   
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Name</Text>
          <TextInput 
            style={styles.input}
            onChangeText={(text)=> this.setState({name: text})}
            />
          <Text style={styles.labels}>Nickname</Text>
          <TextInput 
            style={styles.input}
            onChangeText={(text)=> this.setState({nickname: text})}
            />
          <Text style={styles.breed}>Breed</Text>
          <TextInput 
            style={styles.input}
            onChangeText={(text)=> this.setState({breed: text})}
            />
          <View style={styles.picker}>
          <Picker
            selectedValue={this.state.archetype}
            style={{height: 5, mode: 'dropdown'}}
            onValueChange={(itemValue)=> {this.setState({archetype:itemValue})}}
            >
            <Picker.Item label="Type" />
            <Picker.Item label="Dog" value="dog" />
            <Picker.Item label="Cat" value="cat" />
          </Picker>
        </View>
        <View style={styles.submit}>
          <Button
          
          onPress={this.handleSubmit}
          title="Add Pet"
          color='#fff'
          accessibilityLabel="Click to create a pet profile"
        />
        </View>
        </View>

      </View>
    )
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBF0EF',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#1EB080',
    },
    form: {
     borderWidth: 10,
      borderColor: '#1EB080',
      width: 300,
      height: 600,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FEFEFE'
    },
    input: {
      width: '70%',
      height: 40,
      borderColor: 'grey',
      borderWidth: 2,
      marginBottom: 20
    },
    picker: {
      width: '70%',
      height: 200,
    },
    submit: {
      margin: 10,
      borderWidth: 2,
      borderColor: '#1EB080',
      backgroundColor: '#1EB080',
      height: 40,
      width: '70%'
    },
    lables: {
      color: '#001F15'
    },
    breed: {
      marginBottom: 0
    }


  });