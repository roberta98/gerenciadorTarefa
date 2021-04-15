import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from '../../redux/Actions/userAction'

const index = props => {

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	function renderInput(name, changeName, type,  text){
		return (
			<TextInput 
				onChangeText={changeName}
				value={name}
				style={localStyle.input}
				placeholder={text}
				secureTextEntry={type}
			/>
		)		
	}

	function goHome(){
		if(props.user.logginOn){
			props.navigation.navigate('Home')
		}
	}

	return (
		<View style={localStyle.container}>
			<Image 
				style={localStyle.logo}
				source={require('../../assets/images/logo.png')}
			/>
			{renderInput(userName, setUserName, false, 'Digite seu usuário')}
			{renderInput(password, setPassword, true, 'Digite sua senha')}
			<TouchableOpacity 
				onPress={() => {
					props.login.loginAction({userName, password})
					console.log(props.user)
					console.log(userName, password)
				}} 
				style={localStyle.button}
			>
				<Text style={localStyle.textButton}>Entrar</Text>
			</TouchableOpacity>
		</View>
	)
}


const localStyle = StyleSheet.create({
	container: {
		padding: 20,
		justifyContent: 'center',
		flex: 1,
	},
	logo: {
		width: '100%',
		justifyContent: 'center',
		alignContent: 'center',
		resizeMode: 'contain',
		height: 280,
	},
	input: {
		borderBottomColor: '#454545',
		borderBottomWidth: 1,
		width: '90%',
		paddingVertical: 20,
		marginTop: 16,
		alignSelf: 'center',

	},
	button: {
		height: 45,
		width: '70%',
		borderRadius: 30,
		backgroundColor: "#258bcf",
		justifyContent: 'center',
		alignSelf: 'center',
		marginVertical: 26,
	},
	textButton: {
		color: 'white',
		textAlign: 'center',
		fontSize: 24
	},
})

const mapStateToProps = state => ({
	user: state.userReducer
})

const mapDispatchToProps = dispatch => ({
	login: bindActionCreators(userAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
