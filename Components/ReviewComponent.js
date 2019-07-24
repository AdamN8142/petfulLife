import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export class ReviewComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			review: '',
			comments: []
		}
	}

	handleReview = () => {
		const { comments, review } = this.state
		comments.push(review)

		this.postReview(id)
	}

	postReview = () => {

		// /api/v1/users/:user_id/pets/:pet_id/products/:product_id
		console.log('hi', this.props)
	}



	render(props) {
		console.log('review', this.props)

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