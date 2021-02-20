import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

class AddingItem extends Component {
  state = {
    //itemId: 'Place Holder',
    itemName: '',
    itemCat: '',
    itemPrize: '',

  };

 

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({itemName: text})}
          value={this.state.itemName}
          placeholder="Name"
          disableFullscreenUI={true}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({itemCat: text})}
          value={this.state.itemCat}
          placeholder="Category"
          disableFullscreenUI={true}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({itemPrize: text})}
          value={this.state.itemPrize}
          placeholder="Prize"
          disableFullscreenUI={true}
        />
        <TouchableOpacity
            style={styles.addBtn}
            >
            <Text style={{color: 'white', margin: '2%'}}>Add Items</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '20%'
  },
  textInput: {
    width: (width * 60) / 100, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    margin: 10,
  },
  addBtn: {
    //flex: 1,
    alignItems: 'center',
    width: (width * 35) / 100,
    height: (height * 3) / 100,
    borderRadius: 10,
    backgroundColor: 'green',
    // borderWidth: 3,
    // borderColor: '#666FFF',
  },
});

export default AddingItem;
