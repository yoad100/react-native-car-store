import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../assets/constants/colors";

const CartRow = ({
  title,
  delivery,
  finalPrice,
  quantity,
  priceWithDelivery,
  totalForThisItem,
  deleteItem,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>{title}</Text>
      <Text style={styles.details}>{delivery}</Text>
      <Text style={styles.details}>{finalPrice}</Text>
      <Text style={styles.details}>{quantity}</Text>
      <Text style={styles.details}>{priceWithDelivery}</Text>
      <Text style={styles.details}>{totalForThisItem}</Text>
      <Ionicons
        onPress={deleteItem}
        name="trash-outline"
        size={10}
        color={COLORS.primary}
        cursor="pointer"
      />
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
});
export default CartRow;
