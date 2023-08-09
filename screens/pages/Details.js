import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import Blink from "../../components/Blink";
import LiveTime from "../../components/LiveTime";
import Timer from "../../components/Timer";
// import axios from 'axios';
// import { useState, useEffect, useReducer } from 'react';
import { LinearGradient } from "expo-linear-gradient";

const Details = ({ tickets, navigation }) => {
  // const { } = route.params
  //  const [tickets, setTickets] = useState(initalValue)
  // const [color, setColor] = useState([])
  // const [colorbg, setColorBg] = useState('pink')
  // const [showText, setShowText] = useState(true)
  // const [time, setTime] = useState(500)

  // useEffect(()=>{
  //     async function getAllTickets() {
  //     try{
  //         const ticket = await axios.get("http://192.168.10.5:8000/api/ticket/bdc78f51-0870-4e6b-bceb-2b7d4c5cc3d4")
  //         setTickets(ticket.data)
  //         const result = await axios.get("http://192.168.10.5:8000/api/color/cf4f8e4c-1e95-468f-a60a-5acf578cfa2d")
  //         setColor(result.data)
  //         color.map((time, index) => (
  //             setColorBg(time.colorbg)
  //         ));
  //         console.log(colorbg)
  //     } catch(error){
  //         console.log(error)
  //     }
  //     }
  //     getAllTickets()
  // }, [])

  return (
    <>
      <View style={styles.top}>
        <View style={styles.box}>
          <Text
            style={{
              fontSize: 16,
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            One Way
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              textTransform: "capitalize",
              marginTop: 8,
            }}
          >
            1 Adult
          </Text>
        </View>
        <Pressable
          style={{
            position: "absolute",
            width: 150,
            height: 160,
            justifyContent: "center",
            marginLeft: "57%",
            marginTop: 50,
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("OpenImage")}
        >
          <Image
            source={require("../../assets/qr-code.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </Pressable>
        <Text
          style={{
            textAlign: "right",
            marginRight: "10%",
            fontSize: 14,
            marginTop: "-1%",
          }}
        >
          Tap to enlarge
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            color: "#f80604",
            marginTop: 0,
          }}
        >
          INTERSTATE
        </Text>
        <LinearGradient
          colors={[tickets.colorbg, "#f1f2f6", "#f1f2f6", tickets.colorbg]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.4, 0.6, 1]}
          style={{ borderRadius: 20 / 2, marginHorizontal: 10, width: "95%" }}
        >
          <View
            style={{
              borderRadius: 20 / 2,
              margin: 10,
              height: 120,
              width: "95%",
              margin: 10,
              paddingVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              display: "flex",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 100 }}>
              {tickets.numbers}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 27,
                textTransform: "uppercase",
                marginTop: "-2%",
              }}
            >
              Zone Ride
            </Text>
            <Text style={{ fontWeight: "700", marginBottom: "5%" }}>
              **Not valid for HBLR**
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.bottom}>
        <LiveTime />
        <Blink tickets={tickets} />
        <Timer />
      </View>
    </>
  );
};
export default Details;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    height: 160,
    width: 160,
    paddingLeft: 5,
    paddingTop: 8,
    margin: 14,
  },
  btn: {},
  top: {
    paddingTop: 35,
    flex: 3,
    backgroundColor: "#ffffff",
  },
  bottom: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    bottom: 0,
  },
});
