import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Tabs from './navigaton/tabs';

export default function App() {
  return (
      <NavigationContainer style={{backgroundColor: '#ffffff'}}>
        <StatusBar style="auto" />
        <Tabs />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  first:{
    textTransform: 'uppercase',
    fontSize: '30px',
    color: 'red',
  }
});
