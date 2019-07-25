import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Button, TouchableWithoutFeedback } from 'react-native';
import { PickerComponent } from '../Components/PickerComponent';
import { ReviewComponent } from '../Components/ReviewComponent';
import { fetchData, fetchPost } from '../Utils/fetchCalls';
import { BackgroundProduct} from '../Components/BackgroundProduct';


export class ViewProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			id: null,
			products: [],
			pets: [],
			error: '',
			review: false,
			greeting: ''
		}
	}

	componentDidMount = (props) => {
		console.log('hello this time')
		this.evaluateProps(props)
	}

	evaluateProps = (props) => {

		let pet;
		if (this.props.navigation.state.params) {
			pet = this.props.navigation.state.params.pet
			this.setState({ name: pet.name, id: pet.id }, () => {
				this.getPetProducts()
				this.handleReview()
				this.handleGreeting()
			})
		} else {
			this.getAllPets();
			this.getProducts();
			this.setState({ greeting: "Your Products"})
		}
	}
	handleGreeting = () => {
		this.setState({ greeting: `${this.state.name}'s Products`})
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
	          onPress={() => this.props.navigation.navigate('ProductPreferences', {
	          	product: product, pet: this.state.id
	          })}
	          accessibilityLabel="View Details On A Product"
	          title = 'View Details'
	        />
     	 </View>

				let displayOptions = this.state.review ? viewMore : picker

				return (

					<View key={product.id} style={styles.product}>
						<View>
							<Text>{product.name}</Text>
						</View>
						<View>
							<Text>{product.avg_price}</Text>
						</View>
						<View>
							{displayOptions}
						</View>
						<View>

						<View style={styles.buttonContainer}>
							<TouchableWithoutFeedback
								data={product.id}
								onPress={this.handleDelete.bind(this, product.id)}
								accessibilityLabel="Deletes this product"
							>
								<View style={styles.button}>
									<Text style={styles.buttonText}>Delete This Product</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
						</View>
					</View>
				)
			})
		} else {
			return <Text>You have not scanned any products, yet</Text>
		}
	}

	render(props) {
		console.log(this.makeProductProfiles());
		return (
			<View style={styles.container}>
			<BackgroundProduct style={styles.backgroundImage}/>
				<View style={styles.header}>
					<Text style={styles.greeting}>{this.state.greeting}</Text>
				</View>
				<ScrollView style={{flex: 1}} contentContainerStyle={{ flexGrow: 1 }} >
					<View style={styles.container}>{this.makeProductProfiles()}</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	product: {
		alignSelf:'center',
		borderColor: 'black',
		backgroundColor: '#CCDBD6',
		borderWidth: 1,
		height: 280,
		marginTop: 35,
		width: 300,
		borderRadius: 3,
		flexDirection: 'column',
		opacity: .8,
		resizeMode: 'cover'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
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
    color: '#fff',
		height:80
	},
	backgroundImage: {
		resizeMode: 'cover',
		position:'absolute'
	},
	button: {
		width: 'auto',
		height: 'auto',
		alignItems: 'center',
		margin: 10,
		justifyContent: 'center',
		backgroundColor: '#00a1ff',
		borderRadius: 4,
		opacity: .8
	},
	buttonText: {
		color: 'white',
		padding: 20
	},
})
