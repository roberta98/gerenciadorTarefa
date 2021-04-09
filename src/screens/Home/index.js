import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import CardTaks from '../../components/CardTaks'

const index = props =>  {
	return (
		<ScrollView>
			<CardTaks />
		</ScrollView>
	)
    
}
export default index