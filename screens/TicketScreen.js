import { StyleSheet } from 'react-native';
import Ticket from './pages/Ticket'
import Details from './pages/Details'
import OpenImage from './pages/OpenImage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons }from 'react-native-vector-icons';
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();

const TicketScreen = ({tickets, colors}) => {
    

    
    return(
        <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen
                name="Ticket"
                // component={Ticket}
                // initialParams={tickets}
                options={{
                    title: 'My Tickets',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShadowVisible: false,
                    headerTintColor: '#014492',
                    headerLeft: () => (
                        <Ionicons 
                                name="person-circle-outline"
                                size={40}
                                color= '#014492'
                            />
                    ),
                    headerRight: () => (
                        <Ionicons 
                                name="reload"
                                size={40}
                                color= '#014492'
                            />
                    ),
                    headerStyle: { color: '#fff' }
                }}
            >
                {props => <Ticket {...props} tickets={tickets} />}
            </Stack.Screen>
            <Stack.Screen
                name="Details"
                options={{headerShown: false,}}
            >
                {props => <Details {...props} tickets={tickets} />}
            </Stack.Screen>
            <Stack.Screen
                name="OpenImage"
                options={{headerShown: false,}}
            >
                {props => <OpenImage {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default TicketScreen;

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#1e3799',
        fontSize: 15,
        padding: 7,
        color: '#ffffff'
    },
    bus:{
        borderRadius: 50/2,
        backgroundColor: '#b71540',
        margin: 10,
        height: 50,
        width: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    busTextBox:{
        position: 'absolute',
        marginLeft: 70,
        marginTop: 12,
    },
    busText:{
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15,
    },
    busText2:{
        marginTop: 5,
        fontSize: 15,
        textTransform: 'capitalize'
    }
});
