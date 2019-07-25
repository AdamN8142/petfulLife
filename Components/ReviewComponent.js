import React, { Component } from 'react';
import { View, TextInput, TouchableWithoutFeedback, StyleSheet, Text, Switch, Button } from 'react-native';
import { fetchPatch, fetchData } from '../Utils/fetchCalls';
export class ReviewComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			review: '',
			error: '',
			status: '',
			good_or_bad: 'good',
			SwitchOnValueHolder: false
		}
	}

	handleReview = () => {
		const { review } = this.state
		const { product_id, pet_id } = this.props
		let url = `http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets/${pet_id}/products/${product_id}`

		let newReview = {
			good_or_bad: this.state.good_or_bad, 
			notes: review
		}
		const options =  {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    }

    fetchPatch(url, options)
    .then(response => this.setState( {status: response.status}) )
    .catch(error => this.setState({ error }))
	}

	setValue = (value) => {
  this.setState({ SwitchOnValueHolder: value})
  if (this.state.SwitchOnValueHolder === true) {
  	this.setState({ good_or_bad: 'good'})
  } else {
  	this.setState({ good_or_bad: 'bad'})
  }
 	this.handleReview()
}

saveChanges = () => {
	this.props.editNotes(this.state.review)
	this.handleReview()
}

	render(props) {	
		return (
			<View>
			<View style={{
       backgroundColor: this.state.text,
       borderColor: '#000000',
       borderWidth: 1 }}>
			<TextInput
				placeholder='Add a comment here...'
				multiline = {true}
       	numberOfLines = {4}
       	onChangeText={(review) => this.setState({review})}
       	onEndEditing={() => {this.handleReview()}}
       	value={this.state.review}
				editable={true}
				maxlength={40}
			/>

			</View>
			<View>
			<Text>{this.state.SwitchOnValueHolder ?'Product is Liked':'Product is Disliked'}</Text>
				 <Switch
          onValueChange={(value) => this.setValue(value)}
          value={this.state.SwitchOnValueHolder} />
			</View>
			<Button
				onPress={ () => this.saveChanges()}
				title= 'Save Changes' 
				accessibilityLabel="View Details On A Product"
			/>

			</View>
		);
	}
}
