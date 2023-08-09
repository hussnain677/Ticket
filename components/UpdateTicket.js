import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import KeyboardWrap from './KeyboardWrap';
import { showMessage } from "react-native-flash-message";
import {Picker} from '@react-native-picker/picker';
import {MaterialIcons, FontAwesome, FontAwesome5 }from 'react-native-vector-icons';

// import axios from 'axios';

// const instialState = {
//   name: '',
//   way: '',
//   adult: '',
//   numbers: ''
// }


const UpdateTicket = ({tickets, setTickets, navigation}) => {
  const [state, setState] = useState(tickets)

  const {name, way, adult, numbers} = state

  const ways = ['One Way', 'Return']
  const adults = ['Adult', 'Under 18']

  // const id = '50e137ad-3e83-4dea-bdd3-b65f1273b595'
  // useEffect(() => {
  //   if(id) {
  //       getSingleTicket(id);
  //   }
  // }, [id])
  

  // const getSingleTicket = async (id) => {
  //   try{
  //       const response = await axios.get(`http://172.20.1.138:8000/api/ticket/${id}`)
  //       console.log(response.data)
  //       if(response.status === 200){
  //         setState({...response.data[0]})
  //       }
  //   } catch(error){
  //       console.log(error)
  //   }
  // }

    const updateInput = (e, field) => {
        setState({...state, [field]: e})
    } 

  
    // const updateTicket = async (data, id) => {
    //     try{
    //         const response = await axios.put(`http://192.168.10.5:8000/api/ticket/${id}`, data)
    //         if(response.status === 200){
    //             console.log(response.data)
    //         }
    //     } catch(error){
    //         console.log(error)
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name, !way, !numbers, !adult){
        console.log("Empty")
        }else{
          setTickets({...state, e})
          navigation.navigate('Update Ticket')
          showMessage({
            message: "Update Ticket Information",
            type: "success",
          });
        }  
    }

    return (
      <KeyboardWrap>
        <View style={styles.main}>
        <Text style={styles.maintext}>Update Ticket</Text>
        <Text style={styles.text}>Name:</Text>
        <TextInput 
        style={styles.field}
        placeholder="Ticket Name"
        value={name}
        onChangeText={(e) => updateInput(e, 'name')}
        />
        <Text style={styles.text}>Type:</Text>
        <View style={{justifyContent: 'space-between', flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, margin: 15,}}>
        {ways.map((wa) => (
          <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'center'}}>
            <TouchableOpacity style={{height: 30, width: 30, borderWidth: 1, borderColor: wa === way ? '#113272' : '#6c6c6c' }} 
            onPress={() => updateInput(wa, 'way')}>
              { wa === way && <FontAwesome 
                name="check"
                size={28}
                // onPress={() =>
                //     navigation.navigate('Tickects')
                //   }
                color= '#113272'
            />}
            </TouchableOpacity>
            <Text style={{marginTop: 3, marginLeft: 10, fontSize: 18,}}>{wa}</Text>
          </View>        
        ))}
        </View>
        <Text style={styles.text}>Adult/Child:</Text>
        <View style={{justifyContent: 'space-between', flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, margin: 15,}}>
        {adults.map((wa) => (
          <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'center'}}>
            <TouchableOpacity style={{height: 30, width: 30, borderWidth: 1, borderColor: wa === adult ? '#113272' : '#6c6c6c' }} 
            onPress={() => updateInput(wa, 'adult')}>
              { wa === adult && <FontAwesome 
                name="check"
                size={28}
                // onPress={() =>
                //     navigation.navigate('Tickects')
                //   }
                color= '#113272'
            />}
            </TouchableOpacity>
            <Text style={{marginTop: 3, marginLeft: 10, fontSize: 18, textTransform: 'capitalize'}}>{wa}</Text>
          </View>        
        ))}
        </View>
        <Text style={styles.text}>Number:</Text>
        <TextInput
        style={styles.field}
        placeholder="Add ticket Numbers"
        value={numbers}
        onChangeText={(e) => updateInput(e, 'numbers')}
        />
        <View style={styles.mainbtn}>
        <TouchableOpacity onPress={handleSubmit}><Text style={styles.btn}>Update</Text></TouchableOpacity>
        </View>
        </View>
      </KeyboardWrap>
    )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
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
    marginBottom: 15,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  mainbtn: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
 },
  btn:{
    backgroundColor: 'blue',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  }
});

export default UpdateTicket;