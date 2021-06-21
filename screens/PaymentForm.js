import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { DataContext } from "../data/DataContextProvider";
import COLORS from "../assets/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentForm = ({ navigation }) => {
  const [transactionData, setTransactionData] = useState({});
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    navigation.navigate("OrderMessage");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User details:</Text>
      <View style={styles.formRow}>
        <TextInput
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter First Name"}
        />
        <TextInput
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter Last Name"}
        />
      </View>
      <TextInput
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="email-address"
        placeholder={"Please Enter Email"}
      />
      <TextInput
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"Please Enter Cellphone Number"}
      />
      <View style={styles.formRow}>
        <TextInput
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter State"}
        />
        <TextInput
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter City"}
        />
      </View>
      <TextInput
        style={[styles.inputStyle, styles.inputStyleRegular]}
        required
        placeholder={"Please Enter Street Address"}
      />
      <Text style={styles.title}>Payment details:</Text>
      <TextInput
        style={[styles.inputStyle, styles.inputStyleRegular]}
        required
        placeholder={"Please Enter Card Owner Name"}
      />
      <TextInput
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"Please Enter Id"}
      />
      <TextInput
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"Please Enter Card Number"}
      />
      <View style={styles.formRow}>
        <TextInput
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter Valid Until"}
        />
        <TextInput
          style={[styles.inputStyle, styles.rowInputStyle]}
          keyboardType="numeric"
          placeholder={"Please Enter CVV"}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.btnContainer}>
        <Text style={styles.paymentText}>Submit</Text>
        <MaterialIcons name="payment" size={24} color={COLORS.secondary} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  formLabel: {
    fontSize: 20,
    fontFamily: "ContentFont",
    color: COLORS.iconColor,
  },

  inputStyle: {
    marginTop: 20,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#DCDCDC",
  },
  inputStyleRegular: {
    width: "92%",
  },
  rowInputStyle: {
    width: "45%",
  },
  formRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  title: {
    marginTop: 15,
    fontFamily: "contentFont",
    fontSize: 15,
  },
  btnContainer: {
    width: "100%",
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: COLORS.primary,
    padding: 10,
    flexDirection: "row",
    borderRadius: 5,
  },
  btn: {
    backgroundColor: COLORS.primary,
  },
  paymentText: {
    fontFamily: "contentFont",
    color: COLORS.secondary,
    marginRight: 10,
  },
});

export default PaymentForm;
