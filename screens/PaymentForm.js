import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { DataContext } from "../data/DataContextProvider";
import COLORS from "../assets/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentForm = ({ navigation }) => {
  const [transactionData, setTransactionData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChange = (text, name) => {
    setTransactionData((prev) => {
      return { ...prev, [name]: text };
    });

    console.log(transactionData);
  };

  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    let canMoveOn = true;
    setMessage("");
    let userNameValidation = /^[A-Za-z]+$/;
    let addressesValidation = /^[A-Za-z ]+$/;
    let emailValidation = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;

    if (
      !transactionData.firstName ||
      transactionData.firstName.length < 2 ||
      !userNameValidation.test(transactionData.firstName)
    ) {
      setMessage((prev) => prev + "\ninvalid first name, please try again");
      canMoveOn = false;
      console.log("bad data first name" + transactionData.firstName);
    }
    if (
      !transactionData.lastName ||
      transactionData.lastName.length < 2 ||
      !userNameValidation.test(transactionData.lastName)
    ) {
      setMessage((prev) => prev + "\ninvalid last name, please try again");
      canMoveOn = false;
      console.log("bad data last name");
    }
    if (!transactionData.email || emailValidation.test(transactionData.email)) {
      setMessage((prev) => prev + "\ninvalid email, please try again");
      canMoveOn = false;
      console.log("bad data email");
    }
    if (
      !transactionData.phonenumber ||
      transactionData.phonenumber.length < 9
    ) {
      setMessage((prev) => prev + "\ninvalid phonenumber, please try again");
      canMoveOn = false;
      console.log("bad data phonenumber");
    }
    if (
      !transactionData.state ||
      transactionData.state.length < 3 ||
      !addressesValidation.test(transactionData.state)
    ) {
      setMessage((prev) => prev + "\ninvalid state, please try again");
      canMoveOn = false;
      console.log("bad data state");
    }
    if (
      !transactionData.city ||
      transactionData.city.length < 3 ||
      !addressesValidation.test(transactionData.city)
    ) {
      setMessage((prev) => prev + "\ninvalid city name, please try again");
      canMoveOn = false;
      console.log("bad data city");
    }
    if (!transactionData.address || transactionData.address.length < 3) {
      setMessage((prev) => prev + "\ninvalid address, please try again");
      canMoveOn = false;
      console.log("bad data address");
    }
    if (
      !transactionData.ownerName ||
      transactionData.ownerName.length < 2 ||
      !addressesValidation.test(transactionData.ownerName)
    ) {
      setMessage((prev) => prev + "\ninvalid owner name, please try again");
      canMoveOn = false;
      console.log("bad data owner name");
    }
    if (!transactionData.ownerId || transactionData.ownerId.length !== 9) {
      setMessage((prev) => prev + "\ninvalid id, please try again");
      canMoveOn = false;
      console.log("bad data owner id");
    }
    if (
      !transactionData.cardNumber ||
      transactionData.cardNumber.length !== 12
    ) {
      setMessage((prev) => prev + "\ninvalid card number, please try again");
      canMoveOn = false;
      console.log("bad data card number");
    }
    if (
      !transactionData.day ||
      isNaN(parseInt(transactionData.day)) ||
      parseInt(transactionData.day) < 1 ||
      parseInt(transactionData.day) > 31
    ) {
      setMessage((prev) => prev + "\ninvalid day, please try again");
      canMoveOn = false;
      console.log("bad data day");
    }
    if (
      !transactionData.month ||
      isNaN(parseInt(transactionData.month)) ||
      parseInt(transactionData.month) < 1 ||
      parseInt(transactionData.month) > 12
    ) {
      setMessage((prev) => prev + "\ninvalid month, please try again");
      canMoveOn = false;
      console.log("bad data month");
    }
    if (
      !transactionData.year ||
      isNaN(parseInt(transactionData.year)) ||
      parseInt(transactionData.year) < 2021
    ) {
      setMessage((prev) => prev + "\ninvalid year, please try again");
      canMoveOn = false;
      console.log("bad data year");
    }
    if (
      new Date(
        transactionData.year,
        parseInt(transactionData.month) - 1,
        transactionData.day
      ) < Date.now()
    ) {
      setMessage((prev) => prev + "\ninvalid date, card not valid anymore");
      canMoveOn = false;
    }

    if (!transactionData.cvv || transactionData.cvv.length !== 3) {
      setMessage((prev) => prev + "\ninvalid cvv, please try again");
      canMoveOn = false;
      console.log("bad data cvv");
    }
    if (canMoveOn) navigation.navigate("OrderMessage");
    else setModalVisible(true);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={Modalstyles.centeredView}>
          <View style={Modalstyles.modalView}>
            <Text style={Modalstyles.modalText}>{message}</Text>
            <Pressable
              style={[Modalstyles.button, Modalstyles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={Modalstyles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

const Modalstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    color: COLORS.secondary,
    fontFamily: "boldContentFont",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default PaymentForm;
