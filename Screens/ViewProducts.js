import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Button, TouchableWithoutFeedback } from 'react-native';
import { PickerComponent } from '../Components/PickerComponent';
import { ReviewComponent } from '../Components/ReviewComponent';
import { fetchData, fetchPost } from '../Utils/fetchCalls';

export class ViewProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			id: null,
			products: [],
			pets: [],
			error: '',
			picker: true,
			review: false
		}
	}

	componentDidMount = (props) => {
		this.evaluateProps(props)
	}

	evaluateProps = (props) => {

		let pet;
		if (this.props.navigation.state.params) {
			pet = this.props.navigation.state.params.pet
			this.setState({ name: pet.name, id: pet.id}, () => {
				this.getPetProducts()
				this.handleReview()
			})
		} else {
			this.getAllPets();
			this.getProducts();
		}
	}

	getPetProducts = () => {
		let url = `http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets/${this.state.id}/products`

		fetchData(url)
		.then(response => this.setProducts(response.data.attributes.products))
		.catch(error => this.setState({ error }))
	}

	handleReview = () => {
		this.setState({ review: true})
	}

	getAllPets = () => {
		let url = 'http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets' 
    fetchData(url)
    .then(response => this.setState({ pets: response.data.attributes.pets}))
    .catch(error => this.setState({ error }))
	}

	getProducts = () => {
		let url = 'http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/products'
		fetchData(url)
		.then(response => this.setProducts(response.data.attributes.products))
	}

	setProducts = (products) => {
		products = products.reduce((uniqueProducts, currentProduct) => {
			const uniqueIds = uniqueProducts.map(unique => {
				return unique.id;
			});

			if(!uniqueIds.includes(currentProduct.id)) {
				uniqueProducts.push(currentProduct);
			}

			return uniqueProducts;
		}, [])
		
		this.setState({ products })
	}

	handleDelete = (id) => {
		this.deleteFetch(id)
		let keepProducts = this.state.products.filter(product => {
			return product.id !== id
		})
		this.setState({ products: keepProducts})
	}

	deleteFetch = (id) => {
		let url = `http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/products/${id}`

		const options =  {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetchPost(url, options)
    .then(response => console.log('in the products', response))
	}

	makeProductProfiles = () => {
		if (this.state.products.length) {
			return this.state.products.map(product => {
				
				let picker = <PickerComponent pets={this.state.pets} id={product.id} />
				let viewMore = 	<View>
	        <Button
	          onPress={() => this.props.navigation.navigate('ProductPreferences')}
	          accessibilityLabel="View Details On A Product"
	          title = 'View Details'
	        />
     	 </View>

				let displayOptions = this.state.review ? viewMore : picker
	
				return (
				
					<View key={product.id} style={styles.product}>
						<Text>{product.name}</Text>
						<Text>{product.avg_price}</Text>
						{displayOptions} 
						<View>
						
				<Button 
							data={product.id} 
							style={styles.delete}
							title="Delete This Product"
							onPress={this.handleDelete.bind(this, product.id)}
							/>
						</View>
					</View>
				)
			})
		} else {
			return <Text>You have not scanned any products, yet</Text>
		}
	}

	render(props) {
		
		let greeting = 'hello'
		
		return (
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.greeting}>{greeting}</Text>
					</View>
					<View>{this.makeProductProfiles()}
					</View>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#1EB080',
    borderRadius: 3,
    height: 50,
    width: '100%',
    padding: 5
	},
	greeting: {
		alignSelf:'center',
    fontSize:20,
    fontWeight: "600",
    color: '#fff'
	},

})