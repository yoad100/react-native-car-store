import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../assets/constants/colors";
import { FontAwesome5 } from '@expo/vector-icons';

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
      <Text style={[styles.details,styles.quantity]}>{quantity}</Text>
      <Text style={styles.details}>{priceWithDelivery}</Text>
      <Text style={styles.details}>{totalForThisItem}</Text>
	  <FontAwesome5 name="trash" size={20} color={COLORS.primary} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop:10,
	alignItems:'center',
	borderBottomWidth:1,
	borderStyle:'solid',
	borderBottomColor:COLORS.primary
  },
  details: {
    fontSize: 12,
    fontFamily: "contentFont",
	width:60,
	marginRight:10,
	textAlign:'center'

  },
  quantity:{
	  width:20
  }
});
export default CartRow;
