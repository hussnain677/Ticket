import React, { useEffect, useState, useReducer } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, FlatList  } from 'react-native';
import axios from 'axios';






function Blink({tickets}) {
    const [showText, setShowText] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText((showText) => !showText)
        }, 500);
        return() => {
            clearInterval(interval);
        }
    }, [])

    return(
 
            <View style={styles.blink}>
                {
                showText ? 
                <>
                    <View style={{height: 18,
            width: "31%",
            backgroundColor: tickets.color1,}}></View>
                    <View style={{position: 'absolute',
            height: 18,
            width: "31%",
            marginLeft: "31%",
            backgroundColor: tickets.color2,}}></View>
                    <View style={{position: 'absolute',
            height: 18,
            width: "31%",
            marginLeft: "62%",
            backgroundColor: tickets.color3}}></View>
                </>
                :
                ''
            }
            </View>
    )
}

export default Blink

const styles = StyleSheet.create({
    blink:{
        margin: 10,
        height: 15,
        margin: 10,
    },
});