import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import COLORS from "../assets/constants/colors";
import Category from "../screens/Category";

const CategoryCard = (props) => {

	return (
		<Button
			onPress={
				props.onSelect
			}
			style={styles.container}
			title={props.name}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 400,
		backgroundColor: COLORS.secondary,
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	imgBG: {
		flex: 1,
		width: "100%",
		height: 250,
		justifyContent: "flex-end",
	},
	titleContent: {
		color: COLORS.secondary,
		textAlign: "center",
		fontSize: 30,
		fontFamily: "titleFont",
	},
	cardContainer: {
		backgroundColor: COLORS.secondary,
		width: "90%",
		shadowColor: "black",
		shadowRadius: 10,
		shadowOpacity: 1,
		padding: 10,
	},
});
export default CategoryCard;
