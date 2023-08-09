import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const instialState = {
  name: "",
  way: "",
  adult: "",
  numbers: "",
};

const AddTicket = () => {
  const [state, setState] = useState(instialState);

  const { name, way, adult, numbers } = state;

  const addTicket = async (data) => {
    try {
      const response = await axios.post(
        "http://192.168.10.5:8000/api/addticket/",
        data
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    addTicket(state);
  };

  const updateInput = (e, field) => {
    setState({ ...state, [field]: e });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.maintext}>Add Ticket</Text>
      <Text style={styles.text}>Ticket Name:</Text>
      <TextInput
        style={styles.field}
        placeholder="Ticket Name"
        name="name"
        value={name}
        onChangeText={(e) => updateInput(e, "name")}
      />
      <Text style={styles.text}>Way</Text>
      <TextInput
        style={styles.field}
        placeholder="One Way"
        name="way"
        value={way}
        onChangeText={(e) => updateInput(e, "way")}
      />
      <Text style={styles.text}>Adult or Child</Text>
      <TextInput
        style={styles.field}
        placeholder="Adult"
        name="adult"
        value={adult}
        onChangeText={(e) => updateInput(e, "adult")}
      />
      <TextInput
        style={styles.field}
        placeholder="Add ticket Numbers"
        name="numbers"
        value={numbers}
        onChangeText={(e) => updateInput(e, "numbers")}
      />
      <View style={styles.mainbtn}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.btn}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 20,
    justifyContent: "center",
  },
  field: {
    height: 50,
    fontSize: 18,
    marginBottom: 30,
    borderBottomColor: "#000", // Add this to specify bottom border color
    borderBottomWidth: 1,
    backgroundColor: "#dfe6e9",
    paddingLeft: 10,
  },
  maintext: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mainbtn: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default AddTicket;
