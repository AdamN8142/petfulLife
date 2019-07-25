import React, { Component } from 'react';
import { ReviewComponent } from '../Components/ReviewComponent';
import { View, Text } from 'react-native';
import { fetchPatch } from '../Utils/fetchCalls';



export class ProductPreferences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product_id: null,
			pet_id: null,
			notes: '',
			good_or_bad: false,
			product: {}
		}
	}

	componentDidMount = (props) => {
		this.setIds()
		this.setState({ notes:this.props.navigation.state.params.product.notes})
		this.updateProduct(this.props.navigation.state.params.product)
	}

	editNotes = (note) => {
		this.setState({ notes: note })
	}

	setIds = () => {
		const { pet, product } = this.props.navigation.state.params
		this.setState({ product_id: product.id, pet_id: pet, product: product })

	}

	setGoodOrBad = (status, notes) => {
		console.log('state of product', this.state.product)
		let newProduct = {
			  avg_price: 98.725,
  			good_or_bad: status,
  			id: 17,
  			name: "EXPO(R) Marker Board Towelettes, 6in. x 9in., Pack Of 50",
  			notes: notes,
  			upc: 71641818507,
		}

		this.setState({ product: newProduct})
		console.log('status', status)
		this.setState({ good_or_bad: status})
		this.patchGoodOrBad()
		this.updateProduct( newProduct )
	}

	patchGoodOrBad = () => {
		const { product_id, pet_id, notes } = this.state
		let url = `http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets/${pet_id}/products/${product_id}`
		
		
		let newReview = {
			good_or_bad: 'good', 
			notes: notes
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

	updateProduct = (product) => {
		console.log('product in update', product)
		this.props.navigation.state.params.updateProduct(product)
	}

	render(props) {
		console.log('hi product', this.state.product)
			const { pet, pickedProduct } = this.props.navigation.state.params
			console.log('this was nothing', pickedProduct)
			
		return (
			<View>
				<Text>{pickedProduct.name}</Text>
				<Text>{pickedProduct.avg_price}</Text>
				<Text>{pickedProduct.notes}</Text>
				<ReviewComponent product_id={this.state.product_id} pet_id={this.state.pet_id} editNotes={this.editNotes} setGoodOrBad={this.setGoodOrBad} good={pickedProduct.good_or_bad} />

			</View>
		)
	}
}