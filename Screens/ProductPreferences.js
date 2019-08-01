import React, { Component } from 'react';
import { ReviewComponent } from '../Components/ReviewComponent';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { fetchPatch } from '../Utils/fetchCalls';
import { BackgroundProfile } from '../Components/BackgroundProfile'



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
		const { pet, pickedProduct } = this.props.navigation.state.params
		this.setState({ product_id: pickedProduct.id, pet_id: pet, product: pickedProduct })

	}

	setGoodOrBad = (status, notes) => {
		let newProduct = {
			  avg_price: 98.725,
  			good_or_bad: status,
  			id: 17,
  			name: "EXPO(R) Marker Board Towelettes, 6in. x 9in., Pack Of 50",
  			notes: notes,
  			upc: 71641818507,
		}

		this.setState({ product: newProduct})
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
		this.props.navigation.state.params.updateProduct(product)
	}

	render(props) {
			const { pet, pickedProduct } = this.props.navigation.state.params			
		return (
			<View style={styles.productContainer}>
				<BackgroundProfile style={styles.backgroundImage} />
				<View style={styles.productCard}>
					<Text style={styles.productText}>{pickedProduct.name}</Text>
					<Text style={styles.productText}>{pickedProduct.avg_price}</Text>
					<Text style={styles.productText}>{pickedProduct.notes}</Text>
					<ReviewComponent product_id={this.state.product_id} pet_id={this.state.pet_id} editNotes={this.editNotes} setGoodOrBad={this.setGoodOrBad} good={pickedProduct.good_or_bad} />

				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({

	productText: {
		fontSize: 20,

	},
	productContainer: {
		height: 'auto',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	backgroundImage: {
		resizeMode: 'cover',
		position: 'absolute'
	},
	productCard: {
		backgroundColor: '#CCDBD6',
		height: 'auto',
		marginTop: 35,
		width: 300,
		borderRadius: 3,
		flexDirection: 'column',
		opacity: .8,
		resizeMode: 'cover',
		alignSelf: 'center',
		padding: 5
	}
})