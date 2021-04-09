import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

const CardTaks = props =>  {

	function renderTask(){
		return (
			<View>
				<View>
					<Text>Titulo</Text>
					<Text>15/03/2021</Text>
				</View>
				<View>
					<Button
						// onPress={}
						title="Learn More"
						color="#841584"
					/>
				</View>
			</View>
		)
	}

	return (
			<View>
					{renderTask()}
			</View>
	)

}
export default CardTaks