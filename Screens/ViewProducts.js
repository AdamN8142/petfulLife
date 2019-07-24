import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Button } from 'react-native';
import { PickerComponent } from '../Components/PickerComponent';
import { fetchData, fetchPost } from '../Utils/fetchCalls';

export class ViewProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			id: null,
			products: [],
			pets: [],
			error: ''
		}
	}

	componentDidMount = (props) => {
		
		this.evaluateProps(props)
		// const {navigation} = this.props;
		// const pet = navigation.getParam('pet', 'null');
		// this.setPetName(pet);
		// this.getProducts();
		// this.getAllPets();
		
	}

	evaluateProps = (props) => {

		let pet;
		if (this.props.navigation.state.params) {
			pet = this.props.navigation.state.params.pet
			
			this.setState({ name: pet.name, id: pet.id}, () => {
				this.getPetProducts()
			})
		} else {

			this.getAllPets();
			this.getProducts();
		}
	}

	getPetProducts = () => {
		console.log('pet id', this.state.id)
		let url = `http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets/${this.state.id}/products`

		fetchData(url)
		.then(response => {
			console.log('this is response', response) 
			this.setState({products: response.data.attributes.products})})
		.catch(error => this.setState({ error }))
		console.log('state of view products', this.state)

	}

	getAllPets = () => {
		let url = 'http://petfullifeapi-env.ye3pyyr3p9.us-east-2.elasticbeanstalk.com/api/v1/users/1/pets' 
    fetchData(url)
    .then(response => this.setState({ pets: response.data.attributes.pets}))
    .catch(error => this.setState({error}))


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

	makePetPicker = (product) => {
		if (this.state.pets) {
			return this.state.pets.map(pet => {
				return (
					
					<Picker.Item label={pet.name} key={pet.id} value={pet.id} />
				)
			})
		}
	}

	handlePetAssign = (id, product) => {
		
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
				return (
				
					<View key={product.id} style={styles.product}>
						<Text>{product.name}</Text>
						<Text>{product.avg_price}</Text>
						<View>
						<PickerComponent pets={this.state.pets} id={product.id} />
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
		//pet.name ? `${pet.name}s products` : 'All Products'

		
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