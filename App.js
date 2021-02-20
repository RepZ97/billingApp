import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import Home from './screens/home';
import BarcodeReader from './screens/barcodeReader';
import FinalList from './screens/finalList';
import SignIn from './screens/signIn';
import InventoryTable from './screens/inventoryTable';
import BarcodeInventory from './screens/barcodeInventory';
import AddingItem from './screens/addingItem';
import {createStackNavigator} from '@react-navigation/stack';
import StoreScreen from './screens/storeScreen';
import Statistics from './screens/statistics';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'POS',
              headerStyle: {
                backgroundColor: 'rgba(241,248,254, 1)',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 21,
              },
              headerTitleAlign: 'center',
              headerTintColor: 'rgba(48,156,246, 1)',
            }}
          />
          <Stack.Screen name="Barcode Reader" component={BarcodeReader} />
          <Stack.Screen name="Final List" component={FinalList} />
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Barcode Inventory" component={BarcodeInventory} />
          <Stack.Screen name="Inventory Table" component={InventoryTable} />
          <Stack.Screen name="Adding Item" component={AddingItem} />
          <Stack.Screen name="Statistics" component={Statistics} />
          <Stack.Screen name="Store Screen" component={StoreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
