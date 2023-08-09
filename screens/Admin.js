import React, { useState, Component, useContext } from 'react'
// import AddTicket from '../components/AddTicket';
import UpdateTicket from '../components/UpdateTicket';
import UpdateColor from '../components/UpdateColor';
import Upticketbutton from '../components/Upticketbutton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AdminStack = createNativeStackNavigator();


const Admin = ({tickets, setTickets, colors, setColors}) =>{

    return(
        <>
        <NavigationContainer independent={true}>
        <AdminStack.Navigator>
            <AdminStack.Screen
                name="Update Ticket"
                component={Upticketbutton}
                options={{unmountOnBlur: true, headerShown: false}}     
            />
            <AdminStack.Screen
                name="Update Ticket Page"
                options={{
                    title: 'UPDATE TICKET',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    headerTintColor: '#273c75',
                    headerStyle: { color: '#fff' }
                }}
            >
                {props => <UpdateTicket {...props} tickets={tickets} setTickets={setTickets} />}
            </AdminStack.Screen>
            <AdminStack.Screen
                name="Update Color"
                options={{
                    title: 'UPDATE COLOR',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    headerTintColor: '#273c75',
                    headerStyle: { color: '#fff' }
                }}
            >
                {props => <UpdateColor {...props} colors={colors} setColors={setColors} />}
            </AdminStack.Screen>
        </AdminStack.Navigator>
        </NavigationContainer>
        </>
    )
}


export default Admin;