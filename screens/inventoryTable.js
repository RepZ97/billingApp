import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import axios from 'axios';

const {width, height} = Dimensions.get('screen');
// const tiWidth = (width * 60) / 100;
// const tiHeight = (height * 5) / 100;

export default class InventoryTable extends Component {
  state = {
    tableHead: ['ID', 'Name', 'Category', 'Price\nLKR', 'Notes', 'Offers'],
    tableData: [
      ['1', '2', '3', '4', '5', '6'],
      ['a', 'b', 'c', 'd', 'e', 'f'],
      ['1', '2', '3', '456\n789', '5', '11'],
      ['a', 'b', 'c', 'd', 'e', 'f'],
    ],
  };

  // async componentDidMount() {
  //   //downloading data
  //   const response = await axios.get(
  //     `https://jayasinghes-fuel-sensor-server-2812.zeet.app/Track/New`,
  //   );
  //   response.data.map((d) => {
  //     this.setState({
  //       tableData: [
  //         ...tableData,
  //         [{CompanyID: d._id, CompanyName: d.CompanyName}],
  //       ],
  //     });
  //   });
  //   //this.setState({ nameList })
  // }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>testing </Text>
        <View style={styles.addBtnView}>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => navigation.navigate('Barcode Inventory')}>
            <Text style={{color: 'white'}}>Add Items</Text>
          </TouchableOpacity>
        </View>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={this.state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={this.state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 16,
    //paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    //height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {margin: 6},
  addBtn: {
    //flex: 1,
    alignItems: 'center',
    width: (width * 20) / 100,
    borderRadius: 10,
    backgroundColor: 'green',
    // borderWidth: 3,
    // borderColor: '#666FFF',
  },
  addBtnView: {
    //flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    borderWidth: 3,
    borderColor: 'red',
  },
});
