import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { deleteItem } from './actions/item';

class FinalList extends Component {

    /*pressHandler = (key) => {
        const ss = this.state.list.filter(Data => Data.key!==key)
       this.setState({list:ss})
    }*/

    render() {

        //console.log(this.state)

        return (

            <View>
                <FlatList
                    data={this.props.items}
                    keyExtractor={(item, index) => item.key.toString()}
                    renderItem={(data) => (
                        <View style={Styles.listStyle}>
                            <Text>{data.item.name}</Text>
                            <TouchableOpacity onPress={() => this.props.delete(data.item.key)}>
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>


        );
    };
}

const Styles = StyleSheet.create({

    listStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: '20%'
    }
});

const mapStateToProps = (state) => {
   // console.log(state);
    return {
        items: state.itemReducer.itemList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (key) => dispatch(deleteItem(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalList);