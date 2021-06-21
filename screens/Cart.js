import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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

  const deleteRow = (key) => {
    setCartPresentation((prev) => prev.filter((car) => prev[key] !== car));
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.details}>Product Name</Text>
        <Text style={styles.details}>Delvery Price</Text>
        <Text style={styles.details}>Price</Text>
        <Text style={styles.details}>Quantity</Text>
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
          priceWithDelivery={parseInt(car.final_price) + parseInt(car.delivery)}
          totalForThisItem={
            (parseInt(car.final_price) + parseInt(car.delivery)) *
            quantity[car.title]
          }
          deleteItem={() => deleteRow(index)}
        />
      ))}
      <View style={styles.cost}>
        <Text>Total: </Text>

        {cartPresentation.length > 0 ? (
          <Text>
            {cartPresentation.reduce(
              (total, car) =>
                total +
                (parseInt(car.final_price) + parseInt(car.delivery)) *
                  parseInt(quantity[car.title]),
              0
            )}
          </Text>
        ) : (
          <Text>""</Text>
        )}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
        <Text>Purchase</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
  },
  details: {
    fontSize: 10,
    fontFamily: "contentFont",
  },
  cost: {
    flexDirection: "row",
  },
});

export default Cart;
