import React, { useContext, useEffect, useState, useRef } from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	FlatList,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Button,
	Modal,
	Pressable
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Comment from "../components/Comment";
import CommentCar from "../schemas/CommentCar";
import { DataContext } from "../data/DataContextProvider";
import COLORS from "../assets/constants/colors";

const Product = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const { cars, setChosenCar, setShoppingCart } = useContext(DataContext);
	const [comment, setComment] = useState("");
	const [newCommentId, setNewCommentId] = useState(null);
	const inputRef = useRef(0);

	const car = cars.find(
		(car) => car.title === navigation.getParam("carName")
	);
	Product.navigationOptions = (navigationData) => {
		const carName = navigationData.navigation.getParam("carName");
		return {
			headerTitle: carName,
		};
	};
	// to do a item component with image and content
	//and the name of the user
	const renderItem = ({ item }) => (
		<Comment
			item={item}
			profileImg={item.profileImg}
			userName={item.userName}
			msg={item.msg}
		/>
	);

	const onChangeComment = (content) => {
		setComment(content);
	};

	const postComment = () => {
		car.comments.push(
			new CommentCar(
				car.comments[0].profileImg,
				car.comments[0].userName,
				comment
			)
		);
		setNewCommentId(car.comments[car.comments.length - 1]);
		inputRef.current.clear();
	};

	useEffect(() => {
		setChosenCar(car);
	}, []);
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.imgBG}
				imageStyle={{ resizeMode: "cover" }}
				source={{ uri: car.imgUrl }}>
				<View style={styles.productTitle}>
					<Text style={styles.titleContent}>{car.title}</Text>
				</View>
			</ImageBackground>
			<View style={styles.infoContainer}>
				<View style={styles.buyButton}>
					<Button
						onPress={() => {
							setShoppingCart((prev) => [...prev, car]);
							setModalVisible(true);
						}}
						color={COLORS.primary}
						title={"Add to cart"}
					/>
				</View>
				<ScrollView style={styles.descriptionScroll}>
					<Text style={styles.infoContent}>{car.paragraph}</Text>
				</ScrollView>
				{Object.keys(car).map((key, index) => {
					if (index > 2 && index < Object.keys(car).length - 2)
						return (
							<View key={index} style={styles.contentRow}>
								<Text style={styles.infoContentBold}>
									{key.includes("_")
										? key.replace("_", " ")
										: key}
									:
								</Text>
								<Text style={styles.infoContent}>
									{key=="final_price"?car[key]+"$":car[key]}
								</Text>
							</View>
						);
				})}

				<View style={styles.inputRow}>
					<TextInput
						ref={inputRef}
						style={styles.input}
						onChangeText={onChangeComment}
						placeholder="Raya try our comments please"
						keyboardType="default"
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={postComment}>
						<Ionicons
							name="ios-send"
							size={26}
							color={COLORS.iconColor}
						/>
					</TouchableOpacity>
				</View>

				<ScrollView style={styles.commentsContainer}>
					<FlatList
						data={car.comments}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
						extraData={newCommentId}
					/>
				</ScrollView>
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(false);
				}}>
				<View style={Modalstyles.centeredView}>
					<View style={Modalstyles.modalView}>
						<Text style={Modalstyles.modalText}>Your car has been added to your shopping cart</Text>
						<Pressable
							style={[
								Modalstyles.button,
								Modalstyles.buttonClose,
							]}
							onPress={() => setModalVisible(!modalVisible)}>
							<Text style={Modalstyles.textStyle}>
								close
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.secondary,
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 30,
	},
	imgBG: {
		flex: 0.4,
		width: "100%",
		justifyContent: "flex-end",
	},
	titleContent: {
		color: COLORS.secondary,
		textAlign: "center",
		fontSize: 30,
		fontFamily: "titleFont",
	},
	infoContainer: {
		flex: 1,
		width: "90%",
	},
	infoContent: {
		fontSize: 22,
		fontFamily: "contentFont",
		textAlign: "center",
	},
	infoContentBold: {
		fontSize: 22,
		fontFamily: "boldContentFont",
	},
	commentsContainer: {
		marginTop: 10,
	},
	contentRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		alignItems: "center",
		marginLeft: 10,
		alignSelf: "center",
	},
	buttonText: {
		color: COLORS.secondary,
		fontFamily: "boldContentFont",
	},
	input: {
		width: 300,
		padding: 10,
		alignSelf: "center",
		borderWidth: 2,
		borderColor: COLORS.primary,
	},
	inputRow: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		margin: 20,
	},
	descriptionScroll: {
		height: 200,
	},
	buyButton: {
		alignSelf: "center",
		width: 1000,
	},
});

const Modalstyles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: COLORS.primary,
	},
	textStyle: {
		color:  COLORS.secondary,
		fontFamily:'boldContentFont',
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default Product;
