import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {connect} from 'react-redux';
import {addItem, compareData, downloadData} from './actions/item';
import {deleteItem} from './actions/item';
import axios from 'axios';

const {width, height} = Dimensions.get('screen');
const tiWidth = (width * 60) / 100;
const tiHeight = (height * 5) / 100;

class BarcodeReader extends Component {
  state = {
    value: 'Place Holder',
    qty: [],
    modalVisible: false,
    item: [],
    nameList: [],
    compared: [],
  };
  //this.comparedCodes = this.code(bind);

  async componentDidMount() {
    //downloading data
    const response = await axios.get(
      `https://jayasinghes-fuel-sensor-server-2812.zeet.app/Track/New`,
    );
    // response.data.map((marker, index) => {
    //   this.setState({nameList: index[0]});
    //   //console.log({index});
    //   //console.log({marker});
    // });
    // //console.log(this.state.nameList.id + ' id');

    this.props.download(response.data);
    //sending data to redux
    //console.log(this.state.nameList);
    //this.props.download(this.state.nameList + 'dddd');
  }

  //after barcode scanned
  _onBarcodeScanned = (code) => {
    //this.setState({code});
    this.props.names.map(
      (index) => this.setState({nameList: index}),
      //console.log({index}),
      //console.log({marker}),
    );
    console.log(this.state.nameList + ' tutututututu');
    this.setState({item: code.data});
    this.handleIncrement();
  };

  //
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  //timer for barcode read
  handleIncrement = () => {
    this.timeout = setTimeout(() => {
      this.setModalVisible(true);
    }, 3000);
  };

  compareCodes = (sss) => {
    if (sss == 'SV1176694-LD') {
      this.setState({compared: this.props.names});
      //this.setState({compared: {name: this.props.names}});
      //console.log(this.state.compared);
    }
  };

  render() {
    const {modalVisible} = this.state;

    return (
      <View style={styles.mainContainer}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{this.state.item}</Text>
              <View style={styles.modalViewbtns}>
                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Discard</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                    this.compareCodes(this.state.item);
                    //this.props.compare(this.state.item);
                    this.setState({item: null});
                  }}>
                  <Text style={styles.textStyle}>Add</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.camera}>
          <RNCamera
            ref={(cam) => (this.camera = cam)}
            captureAudio={false}
            style={styles.box}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            autoFocus="on"
            ratio="3:3"
            onBarCodeRead={(code) => this._onBarcodeScanned(code)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({value: text})}
            value={this.state.value}
            disableFullscreenUI={true}
          />
          <TouchableOpacity style={styles.inputBtn}>
            <Text>Input</Text>
          </TouchableOpacity>
          {/* <Text style={styles._txtStyle}>
            Barcode Type: {this.state.code.type}
          </Text> */}
          <Text style={styles._txtStyle}>Barcode Data: {this.state.item}</Text>

          <View>
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
    backgroundColor: 'rgba(241,248,254, 1)',
    borderWidth: 3,
    borderColor: '#666FFF',
    //margin: 10,
  },

  box: {
    //backgroundColor: 'rgba(231,245,253, 1)',
    //borderWidth: 5,
    //borderColor: 'red',
    //width: '70%',
    // height: '10%',
    // marginTop: '15%',
    flex: 1,
  },

  camera: {
    backgroundColor: 'rgba(231,245,253, 1)',
    borderWidth: 3,
    borderColor: 'green',
    width: '70%',
    //marginTop: '15%',
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

  inputBtn: {
    alignItems: 'center',
    backgroundColor: 'blue',
    width: (width * 50) / 100,
    borderRadius: 10,
    //margin: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalViewbtns: {
    flexDirection: 'row',
  },

  down: {
    backgroundColor: '#b22222',
    borderWidth: 3,
    borderColor: 'coral',
  },

  textInput: {
    height: tiHeight,
    width: tiWidth,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    margin: 10,
  },

  /*listStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: '20%'
    }*/
});

const mapStateToProps = (state) => {
  // console.log(state.statedownloadedData.currentState+"dxdxdxdxdxxx");
  return {
    items: state.itemReducer.itemList,
    names: state.itemReducer.namesList,
    goods: state.downloadedData.dataList,
    compares: state.itemReducer.compareList,
  };
};

const mapDispatchToProps = (dispatch) => {
  //console.log(this.state.nameList)
  return {
    add: (item) => dispatch(addItem(item)),
    download: (data) => dispatch(downloadData(data)),
    delete: (key) => dispatch(deleteItem(key)),
    compare: (item) => dispatch(compareData(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeReader);
