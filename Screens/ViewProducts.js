import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Picker } from 'react-native';
import { fetchData } from '../Utils/fetchCalls';

export class ViewProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'null',
			products: [],
			pets: [],
			error: ''
		}
	}

	componentDidMount = (props) => {
		const {navigation} = this.props;
		const pet = navigation.getParam('pet', 'null');
		this.setPetName(pet);
		this.getProducts();
		this.getAllPets();
	}

	getAllPets = () => {
		let url = 'http://localhost:3000/api/v1/users/1/pets' 
    fetchData(url)
    .then(response => this.setState({ pets: response.data.attributes.pets}))
    .catch(error => this.setState({error}))
	}

	setPetName = (pet) => {
		this.setState({name: pet.name})
	}

	getProducts = (id) => {
		let url = 'http://localhost:3000/api/v1/users/1/products'
		fetchData(url)
		.then(response => this.setProducts(response.data.attributes.products))
	}

	setProducts = (products) => {
		this.setState({products})
	}

	makePetPicker = (product) => {
		console.log('does this product have pet id', product)
		if (this.state.pets) {
			return this.state.pets.map(pet => {
				return (
					<Picker.Item label={pet.name} key={pet.id} value={pet.name} />
				)
			})
		}
	}

	makeProductProfiles = () => {
		if (this.state.products.length) {
			return this.state.products.map(product => {
				return (
					<View key={product.id} style={styles.product}>
						<Text>{product.name}</Text>
						<Text>{product.avg_price}</Text>
						<View>
						<Picker style={{height: 2, mode: 'dropdown'}}>{this.makePetPicker(product)}</Picker>
						</View>
					</View>
				)
			})
		} else {
			return <Text>You have not scanned any products, yet</Text>
		}
	}

	render() {
		let greeting = this.state.name ? `${this.state.name}s products` : 'All Products'
		console.log('state of pets in view products', this.state.pets)
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