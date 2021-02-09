import {
  ADD_ITEM,
  DELETE_ITEM,
  DOWNLOAD_DATA,
  COMPARE_DATA,
} from '../actions/types';
import {connect} from 'react-redux';

//const barcode = 'SV1176694-LD';
const initialState = {
  itemList: [],
  namesList: [],
  compareList: [],
};

const itemReducer = (state = initialState, action) => {
  console.log(action.data);
  //console.log(this.state.itemList);
  //console.log(this.state.initialState.namesList.name);

  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: state.itemList.concat({
          // key: Math.random(),
          name: action.data,
        }),
      };
    case DELETE_ITEM:
      return {
        ...state,
        itemList: state.itemList.filter((item) => item.key !== action.key),
      };
    case DOWNLOAD_DATA:
      return {
        ...state,
        namesList: state.namesList.concat({
          Name: action.data.CompanyName,
          //Email: action.data.Email
        }),
      };
    // case COMPARE_DATA:
    //   if (action.data == 'SV1176694-LD') {
    //     return {
    //       ...state,
    //       compareList: state.compareList.concat({
    //         Id: this.props.names,
    //       }),
    //     };
    //   }
    default:
      return state;
  }
};

export default itemReducer;
