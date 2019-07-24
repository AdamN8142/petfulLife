import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { fetchPost } from '../Utils/fetchCalls';

export class PickerComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			picked: ''
		}
	}

	createPickerItems = (pets) => {
		if ( pets.pets ) {
			return pets.pets.map(pet => {
				return (
					<Picker.Item label={pet.name} key={pet.id} value={pet.id} />
				)
			})
		}
	}

	assignProductToPet = (value, id) => {
		console.log('id', value)
		this.setState({picked: value})

		let url = `http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets/${value}/products/${id}`

		let options = {
			method: "POST",
			headers: { "Content-Type": "application/json"},
		}

		fetchPost(url, options)
		.then(response => console.log('picker response', response))
	}

	render(props) {
		console.log('here are the props', this.state)
		return (
			<Picker
				selectedValue={this.state.picked}
				onValueChange={(value) => this.assignProductToPet(value, this.props.id)}>
					{this.createPickerItems(this.props)}
				<Picker.Item label="All Products" value='' />
			</Picker>
		)
	}
}