

// import:
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ProductScreen from "../screens/Product";
import CategoryScreen from "../screens/Category";
import HomePageScreen from "../screens/HomePage";
import PaymentScreen from "../screens/PaymentForm";
import COLORS from "../assets/constants/colors";
import Cart from "../screens/Cart";

const ShopNavigator = createStackNavigator(
  {
	HomePage: HomePageScreen,
    Category: CategoryScreen,
    Product: ProductScreen,
	Payment: PaymentScreen

  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.primary : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : COLORS.primary,
    },
  }
);

// tab navigator -
const ShoppingCart = createBottomTabNavigator(
  {
    Shop: {
      screen: ShopNavigator,
      navigationOptions: {
        // define icon: tabBarIcon is a function that receives tabBar info:
        tabBarIcon: (tabInfo) => {
          return (
           <Entypo name="shop" size={24} color={COLORS.iconColor} />
          );
        },
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        // text:
        tabBarLabel: "Cart",
        // define icon:
        tabBarIcon: (tabInfo) => {
          return (
           <AntDesign name="shoppingcart" size={24} color={COLORS.iconColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.primary,
    },
  }
);
//export default createAppContainer(ShopNavigator);
// return this instead - leads also to the stack navigator.
export default createAppContainer(ShoppingCart);