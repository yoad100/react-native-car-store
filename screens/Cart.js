import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DataContext } from "../data/DataContextProvider";
import CartRow from "./CartRow";

const Cart = ({ navigation }) => {
  const { shoppingCart } = useContext(DataContext);
  const [quantity, setQuantity] = useState({});
  const [cartPresentation, setCartPresentation] = useState([]);
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
  return (
    <View>
      {cartPresentation.map((car, index) => (
        <CartRow
          key={index}
          title={car.title}
          delivery={car.delivery}
          finalPrice={car.final_price}
        />
      ))}
      <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
        <Text>Purchase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
