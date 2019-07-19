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
        <Text>Name</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.setState({name: text})}
          />
        <Text>Nickname</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.setState({nickname: text})}
          />
        <Text>Breed</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.setState({breed: text})}
          />
        <Picker
          selectedValue={this.state.archetype}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue)=> {this.setState({archetype:itemValue})}}
          >
          <Picker.Item label="Dog" value="dog" />
          <Picker.Item label="Cat" value="cat" />
        </Picker>
        <Button
          onPress={this.handleSubmit}
          title="Submit!"
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
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: '70%',
      height: 40,
      borderColor: 'grey',
      borderWidth: 2,
      marginBottom: 20
    }
  });