import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { FontAwesome } from "react-native-vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";

const toggleOptions = [
  { label: "Actice/Non-Active", value: "1" },
  { label: "All Tickets", value: "2" },
];

const Ticket = ({ navigation, tickets }) => {
  // const tickets = route.params?.tickets ?? [{
  //     name: "Zone Ride",
  //     way: "Two",
  //     adult: "Adult",        number: "2"
  // }]
  // const initalValue = [{
  //     name: "Zone Ride",
  //     way: "Two",
  //     adult: "Adult",
  //     number: "2"
  // }]
  // const [tickets, setTickets] = useState(initalValue)

  // useEffect(()=>{
  //     async function getAllTickets() {
  //     try{
  //         const ticket = await axios.get("http://192.168.10.5:8000/api/ticket/bdc78f51-0870-4e6b-bceb-2b7d4c5cc3d4")
  //         setTickets(ticket.data)
  //         console.log(tickets)
  //     } catch(error){
  //         console.log(error)
  //     }
  //     }
  //     getAllTickets()
  // }, [])
  navigation.navigate("Ticket");

  return (
    <View style={{ backgroundColor: "#ffffff", height: "100%" }}>
      <SwitchSelector
        options={toggleOptions}
        initial={0}
        onPress={() => console.log("work")}
        textColor="#949295"
        selectedColor="#d27c3d"
        // fontSize={"17"}
        fontWeight="bold"
        borderRadius={10}
        buttonColor="white"
        backgroundColor="#dcdadd"
        style={{
          margin: 13,
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <View
        style={{
          width: "100%",
          height: 35,
          backgroundColor: "#014492",
          justifyContent: "center",
          paddingLeft: 8,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          Active Tickets
        </Text>
      </View>
      <Pressable
        style={{ borderBottomColor: "#bdc3c7", borderBottomWidth: 0.2 }}
        onPress={() => navigation.navigate("Details", false)}
      >
        <View style={styles.bus}>
          <FontAwesome
            name="bus"
            size={25}
            color="#ffffff"
            style={styles.icon}
          />
        </View>
        <View style={styles.busTextBox}>
          <Text style={styles.busText}>
            {tickets.numbers} Zones (INTERSTATE)
          </Text>
          <Text style={styles.busText2}>One way adult; route number: 135</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Ticket;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1e3799",
    fontSize: 15,
    padding: 7,
    color: "#ffffff",
  },
  bus: {
    borderRadius: 50 / 2,
    backgroundColor: "#ab1c81",
    margin: 10,
    height: 50,
    width: 50,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  busTextBox: {
    position: "absolute",
    marginLeft: 70,
    marginTop: 12,
  },
  busText: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 18,
  },
  busText2: {
    marginTop: 5,
    fontSize: 15,
    textTransform: "capitalize",
  },
});
