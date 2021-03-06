import React,{useContext} from "react";
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import COLORS from "../assets/constants/colors";
import {DataContext} from '../data/DataContextProvider'
const ProductCard = ({onSelect, imgUrl, title, price }) => {
	const {numberWithCommas}  = useContext(DataContext)
	return (
		<TouchableOpacity onPress={onSelect} style={styles.container}>
			<View style={styles.cardContainer}>
				<ImageBackground
					style={styles.imgBG}
					imageStyle={{ resizeMode: "cover" }}
					source={{ uri: imgUrl }}>
					<View style={styles.productTitle}>
						<Text style={styles.titleContent}>{title}</Text>
						<Text style={styles.titleContent}>{numberWithCommas(price)}$</Text>
					</View>
				</ImageBackground>
			</View>	
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.secondary,
		alignItems: "center",
		justifyContent: "center",
		
	},
	imgBG: {
		flex: 1,
		width: "100%",
		height:250,
		justifyContent: "flex-end",
	},
	titleContent: {
		color: COLORS.secondary,
		textAlign: "center",
		fontSize: 30,
		fontFamily: "titleFont",
	},
	cardContainer:{
		backgroundColor: COLORS.secondary,
		width:'90%',
		shadowColor: "black",
		shadowRadius: 10,
		shadowOpacity: 1,
		padding: 10,
	},
	productTitle:{
		backgroundColor:'rgba(0, 0, 0, 0.5)',
	}
});
export default ProductCard;
