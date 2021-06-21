import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const OrderMessage = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.content}>Your order is on its way !</Text>
      <View style={styles.btnContainer}>
        <Button
          title={"Back to the shop"}
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {},
  btnContainer: {},
});

export default OrderMessage;
