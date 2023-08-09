import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TabBarIOSItem, FlatList } from 'react-native';
import {MaterialIcons, FontAwesome, Ionicons, AntDesign }from 'react-native-vector-icons';
import FlashMessage from "react-native-flash-message";

function Upcolorbutton({ navigation }) {
  return (
    <>
    <FlashMessage position="top" style={{textAlign:'center', justifyContent:'center', alignItems:'center'}} />
    <Text style={{fontSize: 40, textTransform: 'uppercase', textAlign: 'center', marginTop: 40,}}>Admin Panel</Text>
    <View style={styles.logo}>
    <Ionicons 
        name="person-circle-outline"
        size={200}
        color= 'black'
    />
    </View>
    <TouchableOpacity  onPress={() =>
        navigation.navigate('Update Ticket Page')
    }>
        <View style={styles.TextBox}>
            <Text style={styles.Text} >Update Ticket</Text>
        </View>
        <AntDesign 
            name="arrowright"
            size={30}
            color= 'black'
            style={{position: 'absolute', justifyContent: 'center', alignSelf: 'flex-end',
            marginRight: "10%", marginTop: 35,}}
        />
    </TouchableOpacity >
    <TouchableOpacity onPress={() =>
        navigation.navigate('Update Color')
    }>
        <View style={styles.TextBox}>
            <Text style={styles.Text} >Update Color</Text>
        </View>
        <AntDesign 
            name="arrowright"
            size={30}
            color= 'black'
            style={{position: 'absolute', justifyContent: 'center', alignSelf: 'flex-end',
            marginRight: "10%", marginTop: 35,}}
        />
    </TouchableOpacity >
    </>
  )
}

export default Upcolorbutton

const styles = StyleSheet.create({
    logo:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    TextBox:{
        borderWidth: '1px',
        borderColor: '#000000',
        height: 80,
        paddingTop: 20,
        paddingBottom: 20,
        margin: 10,
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
    },
    Text:{
        fontSize: 23,
        textTransform: 'uppercase',
        marginLeft: 20,
    }
});
