import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";

const Category = ({ navigation }) => {
	const cars = navigation.getParam("categoryCars");
	Category.navigationOptions = (navigationData) => {
		const categoryName = navigationData.navigation.getParam("categoryName");

		return {
			headerTitle: categoryName,
		};
	};

	return (
		<ScrollView>
			{cars.map((car,index) => (
				<ProductCard
					key={index}
					onSelect={() => {navigation.navigate({routeName:"Product",params:{carName:car.title}})}}
					title={car.title}
					imgUrl={car.imgUrl}
					price={car.final_price}
				/>
			))}
		</ScrollView>
	);
};

export default Category;
