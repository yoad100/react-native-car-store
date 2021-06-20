import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const CartRow = ({title,delivery,finalPrice,quantity}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.details}>{title}</Text>
			<Text style={styles.details}>{delivery}</Text>
			<Text style={styles.details}>{finalPrice}</Text>
			<Text style={styles.details}>{quantity}</Text>
		</View>
	)
}

const styles=StyleSheet.create({
	container:{
		flexDirection:'row',
		padding:10,
		justifyContent:'space-evenly'
	},
	details:{
		fontSize:20,
		fontFamily:'contentFont',
	}
})
export default CartRow
