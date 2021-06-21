import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const OrderMessage = ({ navigation }) => {

	
  return (
    <View>
      <Text style={styles.content}>Your order is on its way !</Text>
      <View style={styles.btnContainer}>
        <Button
          title={"Back to the shop"}
          onPress={() => {
			navigation.reset({
				index:0,
				routes: [{name:'Cart'},{name:'Payment'},{name:'OrderMessage'} ]
			})
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
