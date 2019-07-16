import React, {Component} from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';


export class BackgroundImage extends Component {
  render() {
    return(
      
      <ImageBackground
        source={require('../Images/733ebe705b7e5390871eafaf32b1044a.jpg')}
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