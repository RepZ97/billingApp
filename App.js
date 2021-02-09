import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import Home from './screens/home';
import BarcodeReader from './screens/barcodeReader';
import FinalList from './screens/finalList';
import SignIn from './screens/signIn';
import BarcodeInventory from './screens/barcodeInventory';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Barcode Reader" component={BarcodeReader} />
          <Stack.Screen name="Final List" component={FinalList} />
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Barcode Inventory" component={BarcodeInventory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
