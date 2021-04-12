import React, { useEffect } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardTaks from '../../components/CardTaks'


const index = props => {

	return (
		<ScrollView>
			<CardTaks />
		</ScrollView>
	)   
}
const mapStateToProps = state => ({
	user: state.user
})
// const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps)(index)