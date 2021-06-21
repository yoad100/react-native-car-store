import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { DataContext } from "../data/DataContextProvider";
import COLORS from "../assets/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentForm = ({ navigation }) => {
  const [transactionData, setTransactionData] = useState({});

  const handleOnChange = (text, name) => {
    setTransactionData((prev) => {
      return { ...prev, [name]: text };
    });
    let emailValidation = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;

    console.log(emailValidation.test(transactionData.email));

    console.log(transactionData);
  };

  const handleSubmit = () => {
    let userNameValidation = /^[A-Za-z]+$/;
    if (
      !transactionData.firstName ||
      transactionData.firstName.length < 2 ||
      !userNameValidation.test(transactionData.firstName)
    ) {
      console.log("bad data first name");
    }
    if (
      !transactionData.lastName ||
      transactionData.lastName.length < 2 ||
      !userNameValidation.test(transactionData.lastName)
    ) {
      console.log("bad data last name");
    }
    if (
      !transactionData.email ||
      userNameValidation.test(transactionData.email)
    ) {
      console.log("bad data email");
    }
    if (
      !transactionData.phonenumber ||
      transactionData.phonenumber.length < 9
    ) {
      console.log("bad data phonenumber");
    }
    if (
      !transactionData.state ||
      transactionData.state.length < 3 ||
      !userNameValidation.test(transactionData.state)
    ) {
      console.log("bad data state");
    }
    if (
      !transactionData.city ||
      transactionData.city.length < 3 ||
      !userNameValidation.test(transactionData.city)
    ) {
      console.log("bad data city");
    }
    if (
      !transactionData.address ||
      transactionData.address.length < 3 ||
      !userNameValidation.test(transactionData.address)
    ) {
      console.log("bad data address");
    }
    if (
      !transactionData.ownerName ||
      transactionData.ownerName.length < 2 ||
      !userNameValidation.test(transactionData.ownerName)
    ) {
      console.log("bad data owner name");
    }
    if (!transactionData.ownerId || transactionData.ownerId.length !== 9) {
      console.log("bad data owner id");
    }
    if (
      !transactionData.cardNumber ||
      transactionData.cardNumber.length !== 12
    ) {
      console.log("bad data card number");
    }
    if (
      !transactionData.day ||
      !isNaN(parseInt(transactionData.day)) ||
      !(parseInt(transactionData.day) > 0 && parseInt(transactionData.day) < 32)
    ) {
      console.log("bad data day");
    }
    if (
      !transactionData.month ||
      !isNaN(parseInt(transactionData.month)) ||
      !(
        parseInt(transactionData.month) > 0 &&
        parseInt(transactionData.month) < 12
      )
    ) {
      console.log("bad data month");
    }
    if (
      !transactionData.year ||
      !isNaN(parseInt(transactionData.year)) ||
      !parseInt(transactionData.year) > 2020
    ) {
      console.log("bad data year");
    }
    if (!transactionData.cvv || transactionData.cvv.length !== 3) {
      console.log("bad data cvv");
    }
    navigation.navigate("OrderMessage");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User details:</Text>
      <View style={styles.formRow}>
        <TextInput
          onChangeText={(text) => handleOnChange(text, "firstName")}
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter First Name"}
        />
        <TextInput
          onChangeText={(text) => handleOnChange(text, "lastName")}
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter Last Name"}
        />
      </View>
      <TextInput
        onChangeText={(text) => handleOnChange(text, "email")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="email-address"
        placeholder={"Please Enter Email"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "phonenumber")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"Please Enter Cellphone Number"}
      />
      <View style={styles.formRow}>
        <TextInput
          onChangeText={(text) => handleOnChange(text, "state")}
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter State"}
        />
        <TextInput
          onChangeText={(text) => handleOnChange(text, "city")}
          style={[styles.inputStyle, styles.rowInputStyle]}
          placeholder={"Please Enter City"}
        />
      </View>
      <TextInput
        onChangeText={(text) => handleOnChange(text, "address")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        placeholder={"Please Enter Street Address"}
      />
      <Text style={styles.title}>Payment details:</Text>
      <TextInput
        onChangeText={(text) => handleOnChange(text, "ownerName")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        placeholder={"Please Enter Card Owner Name"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "ownerId")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"Please Enter Id"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "cardNumber")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"Please Enter Card Number"}
      />
      <View style={styles.dateFormRow}>
        <View style={styles.dateContainer}>
          <TextInput
            onChangeText={(text) => handleOnChange(text, "day")}
            keyboardType="numeric"
            style={[styles.inputStyle, styles.date]}
            placeholder={"Day"}
          />
          <TextInput
            onChangeText={(text) => handleOnChange(text, "month")}
            keyboardType="numeric"
            style={[styles.inputStyle, styles.date]}
            placeholder={"Month"}
          />
          <TextInput
            onChangeText={(text) => handleOnChange(text, "year")}
            keyboardType="numeric"
            style={[styles.inputStyle, styles.date]}
            placeholder={"Year"}
          />
        </View>
        <TextInput
          onChangeText={(text) => handleOnChange(text, "cvv")}
          style={[styles.inputStyle, styles.cvv]}
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
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  date: {
    width: "28%",
  },
  dateFormRow: {
    flexDirection: "row",
    width: "92%",
    justifyContent: "space-between",
  },
  cvv: {
    width: "38%",
  },
});

export default PaymentForm;
