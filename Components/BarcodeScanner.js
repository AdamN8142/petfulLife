import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

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
    
  };

  //post to backend ?

  render() {
    console.log('this is the state', this.state)
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


