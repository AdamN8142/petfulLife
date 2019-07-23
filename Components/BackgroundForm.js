import React, {Component} from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';


export class BackgroundForm extends Component {
  render() {
    return(
      
      <ImageBackground
        source={require('../Images/pupPicture.jpg')}
        style={styles.container}
        >
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:'100%',
    width: '100%',
    resizeMode: 'cover',
    position:'absolute'
  }
});