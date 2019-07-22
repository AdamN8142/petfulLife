import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchData } from '../Utils/fetchCalls';


export class ViewProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'null',
			products: []
		}
	}

	componentDidMount = (props) => {
		const {navigation} = this.props
		const pet = navigation.getParam('pet', 'null')
		this.setPet(pet)
		// this.getProducts(id)
	}

	setPet = (pet) => {
		this.setState({name: pet.name})
	}

	getProducts = (id) => {
		let url;
		if (id) {
			url = 'http://localhost:3000/api/v1/users/1/pets'
		} else {
			url = 'http://localhost:3000/api/v1/products'
		}
		fetchData(url)
		.then(response => console.log('view products',response))
		.then(result => this.setProducts(result))
	}

	setProducts = (products) => {
		this.setState({products})
	}



	render() {
		let greeting = this.state.name ? this.state.name : 'All Products';
		return(
			<View>
				<Text style={styles.greeting}>{greeting}</Text>
				<Text>Products</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	
})