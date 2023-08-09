import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';
import KeyboardWrap from './KeyboardWrap';
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
// import ColorPicker from 'react-native-wheel-color-picker'
import axios from 'axios';

// const instialState = {
//     color1: '', 
//     color2: '', 
//     color3: '', 
//     colorbg: ''
//   }



function UpdateColor ({tickets, setTickets}) {
    const [state, setState] = useState(tickets)

    const {color1, color2, color3, colorbg, time, numbers} = state

    const colors = ['#000000','#888888','#ed1c24','#d11cd5','#1633e6','#00aeef','#00c85d','#57ff0a','#ffde17','#f26522']

    // const id = 'cf4f8e4c-1e95-468f-a60a-5acf578cfa2d'

    // useEffect(() => {
    //   if(id) {
    //       getSingleTicket(id);
    //   }
    // }, [id])
    
  
    // const getSingleTicket = async (id) => {
    //   try{
    //       const response = await axios.get(`http://192.168.10.5:8000/api/color/${id}`)
    //       console.log(response.data)
    //       if(response.status === 200){
    //         setState({...response.data[0]})
    //       }
    //   } catch(error){
    //       console.log(error)
    //   }
    //   forceUpdate()
    // }



    const updateInput = (e, field) => {
        setState({...state, [field]: e})
    } 



    // const updateColor = async (data, id) => {
    //     try{
    //         const response = await axios.put(`http://192.168.10.5:8000/api/color/${id}`, data)
    //         if(response.status === 200){
    //             console.log(response.data)
    //         }
    //     } catch(error){
    //         console.log(error)
    //     }
    //     forceUpdate()
    // }



    const handleSubmit = (e) => {
        e.preventDefault();
        if(!color1, !color2, !color3, !colorbg){
            console.log("Empty")
        }else{
          setTickets({...state, e})
          showMessage({
            message: "Update Color Information",
            type: "success",
          })
        }  
    }


    return(
        <KeyboardWrap>
          <FlashMessage position="bottom" style={{textAlign:'center', justifyContent:'center', alignItems:'center'}} />
          <View style={{flex: 1}}>
          <Text style={styles.maintext}>Update Ticket Details</Text>
          <Text style={styles.text}>Ticket Number:</Text>
          <TextInput
          style={styles.field}
          placeholder="Add ticket Numbers"
          value={numbers}
          onChangeText={(e) => updateInput(e, 'numbers')}
          />
          <Text style={styles.text}>Color 1 for Blink:</Text>
          {/* <ColorPicker
            color={color1}
            style={{paddingRight: 20,}}
            noSnap={true}
            row={true}
            thumbSize={30}
            sliderSize={20}
            onColorChange={(e) => updateInput(e, 'color1')}
          /> */}
          {/* <View style={{justifyContent: 'space-between', flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 10,}}>
          {colors.map((color) => (
                  <TouchableOpacity style={{height: 30, width: 30, borderRadius: "50%", backgroundColor: color, borderWidth: 2, borderColor: color1 === color ? 'orange' : 'grey' }} 
                  onPress={() => updateInput(color, 'color1')}>
                  </TouchableOpacity>
                ))}
          </View> */}
          <TextInput
          style={styles.field}
          placeholder="color1"
          value={color1}
          autoCapitalize='none'
          onChangeText={(e) => updateInput(e, 'color1')}
          />
          <Text style={styles.text}>Color 2 for Blink:</Text>
          <TextInput
          style={styles.field}
          placeholder="color2"
          value={color2}
          autoCapitalize='none'
          onChangeText={(e) => updateInput(e, 'color2')}
          />
          <Text style={styles.text}>Color 3 for Blink:</Text>
          <TextInput
          style={styles.field}
          placeholder="color3"
          value={color3}
          autoCapitalize='none'
          onChangeText={(e) => updateInput(e, 'color3')}
          />
          <Text style={styles.text}>Color Background for Ticket:</Text>
          <TextInput
          style={styles.field}
          placeholder="Color Background"
          value={colorbg}
          autoCapitalize='none'
          onChangeText={(e) => updateInput(e, 'colorbg')}
          />
          {/* <Text style={styles.text}>Blink Time:</Text>
          <TextInput
          style={styles.field}
          placeholder="Blinking Time"
          value={time}
          onChangeText={(e) => updateInput(e, 'time')}
          /> */}
          <View style={styles.mainbtn}>
          <TouchableOpacity onPress={handleSubmit}><Text style={styles.btn}>Update</Text></TouchableOpacity>
          </View>
          </View>
        </KeyboardWrap>
        
    )
    

};

const styles = StyleSheet.create({
  main:{
    margin: 20,
    justifyContent: 'center',
  },
  field:{
    height: 50,
    fontSize: 18,
    borderColor: '#000', // Add this to specify  border color
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    margin: 10,
    borderRadius: 6,
  },
  maintext:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  mainbtn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 20,
 },
  btn:{
    backgroundColor: 'blue',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: "3%",
    paddingBottom: 20,
  },
  
});

export default UpdateColor;