import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { fetchPatch } from '../Utils/fetchCalls';
export class ReviewComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			review: '',
			error: '',
			status: ''
		}
	}

	handleReview = () => {
		const { review } = this.state
		const { product_id, pet_id } = this.props
		console.log( 'here is pet', pet_id, 'here is product', product_id)
		let url = `http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets/${pet_id}/products/${product_id}`


		let newReview = {
			good_or_bad: 'good', 
			notes: review
		}
		const options =  {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    }
    console.log('url', url)
    console.log('options', options)
    fetchPatch(url, options)
    .then(response => this.setState( {status: response.status}) )
    .catch(error => this.setState({ error }))
	}

	render(props) {
		

		const { id } = this.props
		return (
			<View style={{
       backgroundColor: this.state.text,
       borderColor: '#000000',
       borderWidth: 1 }}>
			<TextInput
				placeholder='Add a comment here...'
				multiline = {true}
       	numberOfLines = {4}
       	onChangeText={(review) => this.setState({review})}
       	onEndEditing={() => this.handleReview()}
       	value={this.state.review}
				editable={true}
				maxlength={40}
			/>
			</View>
		);
	}
}