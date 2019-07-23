import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { fetchData } from '../Utils/fetchCalls';

export class ViewProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'null',
			products: [],
			error: {}
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
		// let url;
		// if (id) {
		// 	url = 'http://localhost:3000/api/v1/users/1/pets'
		// } else {
		let url = 'http://localhost:3000/api/v1/users/1/products'
		
		fetchData(url)
		.then(response => this.setResponse(response))
	}

	setResponse = (response) => {
		if (response.error) {
			this.setState({ error: response})
		} else {
			console.log('Response in view products', response)
			this.setState({products})
		}
	}

	render() {
		let greeting = this.state.name ? this.state.name : 'All Pet';
		let errorMessage = this.state.error && 'You have no products saved yet'
		return(
			<ScrollView>
				<View style={styles.header}>
					<Text style={styles.greeting}>View {greeting}s Products</Text>
				</View>
				<Text style={styles.error}> {errorMessage} </Text>	
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
	error: {
		color: 'red',
		alignSelf:'center',
	}
})