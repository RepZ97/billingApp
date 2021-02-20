import React, {Component} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Barcode Reader')}
            style={styles.menuButton}>
            <Text>Billing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Inventory Table')}
            style={styles.menuButton}>
            <Text>Inventory</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Statistics')}
            style={styles.menuButton}>
            <Text>Statistics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Store Screen')}
            style={styles.menuButton}>
            <Text>Store</Text>
          </TouchableOpacity>
        </View>
        {/* <Button
          title="Inventory Table"
          onPress={() => navigation.navigate('Inventory Table')}
        />
        <Button
          title="Statistics"
          onPress={() => navigation.navigate('Statistics')}
        />
        <Button
          title="Store Screen"
          onPress={() => navigation.navigate('Store Screen')}
        /> */}
        <Button
          title="Final List"
          onPress={() => navigation.navigate('Final List')}
        />
        <Button
          title="Barcode Inventory"
          onPress={() => navigation.navigate('Barcode Inventory')}
        />
        <Button
          title="Adding Item"
          onPress={() => navigation.navigate('Adding Item')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    margin: '20%',
  },
  menuButton: {
    backgroundColor: 'rgba(231,245,253, 1)',
  },
  buttonView: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
