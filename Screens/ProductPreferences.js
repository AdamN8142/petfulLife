import React, { Component } from 'react';
import { ReviewComponent } from '../Components/ReviewComponent';
import { View, Text } from 'react-native';



export class ProductPreferences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product_id: null,
			pet_id: null,
			notes: ''
		}
	}

	componentDidMount = (props) => {
		this.setIds()
		this.setState({ notes:this.props.navigation.state.params.product.notes})
	}

	editNotes = (note) => {
		console.log('can i figure this out in edit', note)
		this.setState({ notes: note })
	}

	setIds = () => {
		const { pet, product } = this.props.navigation.state.params
		this.setState({ product_id: product.id, pet_id: pet })
	}

	render(props) {
			const { pet, product } = this.props.navigation.state.params
			console.log('notes are here', this.state.notes)
		return (
			<View>
				<Text>{product.name}</Text>
				<Text>{product.avg_price}</Text>
				<Text>{this.state.notes}</Text>
				<ReviewComponent product_id={this.state.product_id} pet_id={this.state.pet_id} editNotes={this.editNotes} />

			</View>
			)
	}
}