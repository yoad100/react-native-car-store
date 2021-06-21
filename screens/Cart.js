import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Button,
} from "react-native";
import { DataContext } from "../data/DataContextProvider";
import CartRow from "./CartRow";
import COLORS from "../assets/constants/colors.js";

const Cart = ({ navigation }) => {
	const { shoppingCart, coupons } = useContext(DataContext);
	const [quantity, setQuantity] = useState({});
	const [cartPresentation, setCartPresentation] = useState([]);
	const [appliedCoupon, setAppliedCoupon] = useState();
	const [currentPrice, setCurrentPrice] = useState();

	const handleOnChange = (text) => setAppliedCoupon(text);

	const handleCoupon = () => {
		const currentCoupon = coupons.find(
			(coupon) => coupon.couponCode === appliedCoupon
		);
		

		setCurrentPrice(
			cartPresentation.reduce(
				(total, car) =>
					total +
					(parseInt(car.final_price) + parseInt(car.delivery)) *
						parseInt(quantity[car.title]),
				0
			)
		);

		if (currentCoupon) {
			setCurrentPrice(
				(prev) => prev - (prev * currentCoupon.discountPercent) / 100
			);
		}
	};

	useEffect(() => {
		const tempQuantity = {};
		shoppingCart.forEach((car) => {
			tempQuantity[car.title]
				? tempQuantity[car.title]++
				: (tempQuantity[car.title] = 1);
		});
		setQuantity(tempQuantity);
		const tempCarPresentation = [];
		for (let i = 0; i < shoppingCart.length; i++) {
			if (
				tempCarPresentation.find(
					(car) => shoppingCart[i].title === car.title
				) == undefined
			)
				tempCarPresentation.push(shoppingCart[i]);
		}
		setCartPresentation(tempCarPresentation);
	}, [shoppingCart]);

	const deleteRow = (key) => {
		setCartPresentation((prev) => prev.filter((car) => prev[key] !== car));
	};

	return (
		<View style={styles.container}>
			<View style={styles.detailsContainer}>
				<Text style={styles.details}>Product Name</Text>
				<Text style={styles.details}>Delvery Price</Text>
				<Text style={styles.details}>Price</Text>
				<Text style={[styles.details, styles.quantity]}>#</Text>
				<Text style={styles.details}>Price With Delivery</Text>
				<Text style={styles.details}>Line Price</Text>
			</View>
			{cartPresentation.map((car, index) => (
				<CartRow
					key={index}
					title={car.title}
					delivery={car.delivery}
					finalPrice={car.final_price}
					quantity={quantity[car.title]}
					priceWithDelivery={
						parseInt(car.final_price) + parseInt(car.delivery)
					}
					totalForThisItem={
						(parseInt(car.final_price) + parseInt(car.delivery)) *
						quantity[car.title]
					}
					deleteItem={() => deleteRow(index)}
				/>
			))}
			<View style={styles.cost}>
				<Text style={styles.costText}>Total before Discount: </Text>

				{cartPresentation.length > 0 ? (
					<Text style={styles.costText}>
						{cartPresentation.reduce(
							(total, car) =>
								total +
								(parseInt(car.final_price) +
									parseInt(car.delivery)) *
									parseInt(quantity[car.title]),
							0
						)}
					</Text>
				) : (
					<Text>""</Text>
				)}
			</View>
			<View style={styles.cost}>
				<TextInput
					style={styles.inputStyle}
					onChangeText={(text) => handleOnChange(text)}
					placeholder={"enter coupon"}
				/>

				<TouchableOpacity
					onPress={handleCoupon}
					style={styles.couponBtn}>
					<Text style={styles.couponText}>Apply coupon</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cost}>
				<Text style={styles.costText}>Total after Discount: </Text>
				<Text>{currentPrice}</Text>
			</View>
			<View style={styles.purchaseContainer}>
				<TouchableOpacity
					style={styles.couponBtn}
					onPress={() => navigation.navigate("Payment")}>
					<Text style={styles.couponText}>Purchase</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	detailsContainer: {
		flexDirection: "row",
	},
	details: {
		fontSize: 12,
		fontFamily: "boldContentFont",
		width: 60,
		marginRight: 10,
		textAlign: "center",
	},
	cost: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 10,
	},
	costText: {
		fontSize: 17,
	},
	quantity: {
		width: 20,
	},
	inputStyle: {
		height: 40,
		width: "50%",
		paddingHorizontal: 10,
		borderRadius: 5,
		backgroundColor: "#DCDCDC",
		marginRight: 5,
	},
	couponBtn: {
		width: "30%",
		height: 40,
		backgroundColor: COLORS.primary,
		padding: 5,
		flexDirection: "row",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	couponText: {
		fontSize: 14,
		fontFamily: "contentFont",
		color: COLORS.secondary,
		marginRight: 10,
	},
	purchaseContainer:{
		marginTop:10,
		alignItems:'center'
	}
});

export default Cart;
