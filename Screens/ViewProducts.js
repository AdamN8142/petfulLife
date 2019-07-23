import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { fetchData } from '../Utils/fetchCalls';

export class ViewProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'null',
			products: [],
		}
	}

	componentDidMount = (props) => {
		const {navigation} = this.props
		const pet = navigation.getParam('pet', 'null')
		this.setPet(pet)
		this.getProducts()
	}

	setPet = (pet) => {
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

	makeProductProfiles = () => {
		if (this.state.products.length) {
			return this.state.products.map(product => {
				return (
					<View key={product.id} style={styles.product}>
						<Text>{product.name}</Text>
						<Text>{product.avg_price}</Text>
					</View>
				)
			})
		}
	}

	render() {
		let greeting = this.state.name ? `${this.state.name}s products` : 'All Products'

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