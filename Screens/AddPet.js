import React, { Component }from 'react';
import { Button, StyleSheet, TextInput, Text, Picker, View } from 'react-native';



export class AddPet extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      nickName: '',
      type: '',
      breed: '',
    } 
  }


  

  render(){
    console.log(this.state)
    return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.setState({name: text})}
          // value={this.state.name}
        />
      <Text>Nickname</Text>
      <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.setState({nickName: text})}
          // value={this.state.nickName}
        />
      <Text>Breed</Text>
      <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.setState({breed: text})}
          // value={this.state.breed}
        />
        <Picker
          selectedValue={this.state.type}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue)=> {this.setState({type:itemValue})}}
          >
          <Picker.Item label="Dog" value="dog" />
          <Picker.Item label="Cat" value="cat" />
        </Picker>
        
      <Button
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