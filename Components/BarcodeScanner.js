import React, { Component } from 'react';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner';

export class BarcodeScanner extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <BarCodeScanner
      onBarCodeRead={this._handleBarCodeRead}
      style={{ height: 200, width: 200 }}
    />
    )
  }
}


