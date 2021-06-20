import React, { useState,useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage";
import DataContextProvider from "./data/DataContextProvider";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import CarShopNavigation from "./navigation/CarShopNavigation";

const fetchFonts = async() => {
	// pass an object with all the fonts:
	// loadAsync returns a promise -> take a little longer

	await Font.loadAsync({
		// font-name(we use) : path to the font
		"titleFont": require("./assets/fonts/Staatliches-Regular.ttf"),
		"fontMashoo": require("./assets/fonts/StintUltraCondensed-Regular.ttf"),
		"contentFont": require("./assets/fonts/Poppins-Regular.ttf"),
		"boldContentFont": require("./assets/fonts/Poppins-Bold.ttf"),
	});
};

export default function App() {
	// function outside the App component:
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) 
		return (
			<AppLoading
				startAsync={()=>fetchFonts()}
				onFinish={() => setDataLoaded(true)}
				onError={() => console.log(err)}
			/>
		);
	
	return (
		<DataContextProvider>
		 <CarShopNavigation/>
		</DataContextProvider>
		
	);
}
