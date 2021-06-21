import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import COLORS from "../assets/constants/colors";
import { NavigationActions, StackActions } from "react-navigation";
const OrderMessage = ({ navigation }) => {
  OrderMessage.navigationOptions = (navigationData) => {
    return {
      headerLeft: () => <Text></Text>,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Congratulation !</Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://cdn4.vectorstock.com/i/1000x1000/63/78/transportation-logistics-container-ship-and-plane-vector-25606378.jpg",
        }}
      />
      <Text style={styles.content}>Your order is on its way !</Text>
      <View style={styles.btnContainer}>
        <Button
          style={styles.btn}
          color={COLORS.primary}
          title={"Back to the shop"}
          onPress={() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: "Cart",
                }),
                NavigationActions.navigate({
                  routeName: "Payment",
                }),
                NavigationActions.navigate({
                  routeName: "OrderMessage",
                }),
              ],
            });
            navigation.dispatch(resetAction);
            navigation.navigate("HomePage");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    fontFamily: "contentFont",
    fontSize: 24,
    textAlign: "center",
  },
  btnContainer: {},
  img: {
    height: 250,
    width: "100%",
  },
});

export default OrderMessage;
