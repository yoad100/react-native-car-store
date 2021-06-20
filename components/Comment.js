import React, { useEffect } from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import COLORS from '../assets/constants/colors'


const Comment = ({ profileImg, userName, msg }) => {
	useEffect(() => {
		console.log(profileImg);
	}, []);

	return (
		<View style={styles.commentContainer}>
			<View style={styles.userDetails}>
				<View style={styles.imgContainer}>
					<Image style={styles.img} source={{uri:profileImg}} />
				</View>
				<Text style={styles.userName}>{userName}</Text>
			</View>
			<Text style={styles.msg}>{msg}</Text>
		</View>
	);
};

export default Comment;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

	},
	userDetails: {
		flexDirection: "row",
		alignItems:'center',
		backgroundColor:COLORS.primary,
		borderTopLeftRadius:200,
		borderBottomLeftRadius:200
	},
	img: {
		borderRadius: 200,
		resizeMode: "cover",
		width: "100%",
		height: 40,
		overflow: "hidden",
		borderWidth: 1,
		borderColor:'transparent'
	},
	imgContainer: {
		width: 40,
	},
	userName:{
		fontFamily:'boldContentFont',
		paddingLeft:10,
		paddingRight:10,
		color:COLORS.secondary

	},
	commentContainer:{
		marginBottom:30,
		width:'100%'
	},
	msg:{
		fontFamily:'contentFont',
		paddingLeft:13
	}
});
