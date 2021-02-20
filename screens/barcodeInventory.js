import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import {connect} from 'react-redux';
// import {addItem} from './actions/item';

class BarcodeInventory extends Component {
  state = {
    item: [],
    compared: [],
    value: 'Place Holder',
  };
  _onBarcodeScanned = (code) => {
    // if (code.data == 'SV1176694-LD') {
    //   // console.log(this.props.names);
    //   this.setState({compared: this.props.names});
    //   //console.log(this.state.compared);
    // }
    //this.setState({compared: this.props.names});
    //console.log(this.state.compared);
  };

  onPressAdd = (sd) => {
    this.props.add(sd);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.camera}>
          <RNCamera
            ref={(cam) => (this.camera = cam)}
            style={styles.box}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            autoFocus="on"
            onBarCodeRead={(code) => this._onBarcodeScanned(code)}
          />
        </View>
        <View style={styles.info}>
          <View style={styles.flatList}>
            <FlatList
              data={this.state.compared}
              renderItem={(data) => (
                <View>
                  <Text>{data.item.Name}</Text>
                  {/* <TouchableOpacity
                    onPress={() => this.props.delete(data.item.key)}>
                    <Text>X</Text>s
                  </TouchableOpacity> */}
                </View>
              )}
            />
          </View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({value: text})}
            value={this.state.value}
          />
          <TouchableOpacity
            onPress={({compared: Name}) => this.onPressAdd({compared: Name})}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#666FFF',
    backgroundColor: 'rgba(241,248,254, 1)',
  },

  box: {
    // backgroundColor: '#b22222',
    // borderWidth: 5,
    // borderColor: 'red',
    // width: '60%',
    // //height: '100%',
    // marginTop: '15%',
    flex: 1,
  },

  info: {
    width: '100%',
    height: '45%',
    backgroundColor: 'rgba(241,248,254, 1)',
    borderWidth: 3,
    borderColor: 'yellow',
    flex: 1.75,
    alignItems: 'center',
  },

  camera: {
    backgroundColor: 'rgba(231,245,253, 1)',
    borderWidth: 3,
    borderColor: 'green',
    width: '70%',
    //marginTop: '15%',
    flex: 1,
  },

  flatList: {
    flex: 0.5,
    borderWidth: 6,
    width: '60%',
    borderColor: 'coral',
  },
  result: {
    flex: 0.25,
    width: '40%',
  },
});

// const mapStateToProps = (state) => {
//   return {
//     names: state.itemReducer.namesList,
//     items: state.itemReducer.itemList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (item) => dispatch(addItem(item)),
//   };
// };

export default BarcodeInventory;
