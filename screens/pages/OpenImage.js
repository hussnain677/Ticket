import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const OpenImage = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          width: 270,
          height: 270,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 110,
        }}
        onPress={() => navigation.navigate("Details")}
      >
        <Image
          source={require("../../assets/qr-code.png")}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 0,
          }}
        />
      </Pressable>
      <Text style={{ textAlign: "center", fontSize: 16, marginTop: "3%" }}>
        Tap bar code to go back
      </Text>
    </View>
  );
};

export default OpenImage;
