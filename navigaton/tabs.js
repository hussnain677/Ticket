import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import RiderScreen from "../screens/RiderScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import TicketScreen from "../screens/TicketScreen";
import Ticket from "../screens/pages/Ticket";
// import Admin from '../screens/Admin';
import UpdateColor from "../components/UpdateColor";
import React from "react";
import {
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Feather,
} from "react-native-vector-icons";
import { useState, useEffect } from "react";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const initalValue = {
    color1: "#faddd9",
    color2: "#a6c4cc",
    color3: "#a45537",
    colorbg: "#b876cc",
    time: "100",
    numbers: "10",
  };

  const [tickets, setTickets] = useState(initalValue);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderTopColor: "#fff",
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
      }}
    >
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          style: {
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="star-o"
                size={28}
                // onPress={() =>
                //     navigation.navigate('Tickects')
                //   }
                color={focused ? "#113272" : "#6c6c6c"}
              />
              <Text
                style={{
                  fontSize: 11,

                  color: focused ? "#113272" : "#6c6c6c",
                  marginTop: 3,
                }}
              >
                Favorites
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tickects"
        options={{
          style: {
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
          unmountOnBlur: true,
          backBehavior: "Ticket",
          headerShown: false,
          tabBarBadge: 1,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="ticket"
                size={28}
                color={focused ? "#113272" : "#6c6c6c"}
              />
              <Text
                style={{
                  fontSize: 11,

                  color: focused ? "#113272" : "#6c6c6c",
                  marginTop: 3,
                }}
              >
                My Tickects
              </Text>
            </View>
          ),
        }}
      >
        {(props) => <TicketScreen {...props} tickets={tickets} />}
      </Tab.Screen>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather
                name="home"
                size={28}
                color={focused ? "#113272" : "#6c6c6c"}
              />
              <Text
                style={{
                  fontSize: 11,

                  color: focused ? "#113272" : "#6c6c6c",
                  marginTop: 3,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Rider"
        component={RiderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/desti.png")}
                style={{
                  width: 36,
                  height: 36,
                  color: focused ? "#113272" : "#6c6c6c",
                  marginTop: "-10%",
                }}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: focused ? "#113272" : "#6c6c6c",
                  marginTop: 3,
                }}
              >
                Rider Tools
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: focused ? "#113272" : "#6c6c6c",
                  marginBottom: "-3%",
                  padding: "0%",
                }}
              >
                <MaterialIcons
                  name="more-horiz"
                  size={40}
                  color={focused ? "#113272" : "#6c6c6c"}
                  style={{ margin: "-8%" }}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  color: focused ? "#113272" : "#6c6c6c",
                  marginTop: 3,
                }}
              >
                More
              </Text>
            </View>
          ),
        }}
      >
        {(props) => (
          <UpdateColor {...props} tickets={tickets} setTickets={setTickets} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "red",
    borderRadius: 15,
    height: 90,
  },
});
