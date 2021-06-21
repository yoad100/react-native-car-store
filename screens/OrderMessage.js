import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';
const OrderMessage = ({ navigation }) => {

	
  return (
    <View>
      <Text style={styles.content}>Your order is on its way !</Text>
      <View style={styles.btnContainer}>
        <Button
          title={"Back to the shop"}
          onPress={() => {
			const resetAction = StackActions.reset({
				index:0,
				actions: [NavigationActions.navigate({ routeName: 'Cart' }),
				NavigationActions.navigate({ routeName: 'Payment' }),
				NavigationActions.navigate({ routeName: 'OrderMessage' })		
			],
			})
			navigation.dispatch(resetAction)
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
