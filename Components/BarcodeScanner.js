import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { fetchPost } from '../Utils/fetchCalls';

export class BarcodeScanner extends Component {
  constructor(){
    super();
     this.state = {
    hasCameraPermission: null,
    scanned: false,
    data: '',
    type: ''
    }
  }

  componentDidMount() {
    this.getPermissions();
  }

  getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  handleCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true, data, type });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.postProduct( data ) 
  };

  postProduct = (data) => {
    let url = 'http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/products'
    let post = {
      upc: data,
      user_id: 1
    }
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }

    fetchPost(url, options)
    .then(response => console.log('barcode', response))
  } 

  render() {
    const { hasCameraPermission, scanned } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>
    );
  }

}


