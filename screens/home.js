import React, {Component} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View>
        <Text>testing </Text>
        <Button
          title="Barcode Reader"
          onPress={() => navigation.navigate('Barcode Reader')}
        />
        <Button
          title="Final List"
          onPress={() => navigation.navigate('Final List')}
        />
        <Button
          title="Barcode Inventory"
          onPress={() => navigation.navigate('Barcode Inventory')}
        />
      </View>
    );
  }
}
