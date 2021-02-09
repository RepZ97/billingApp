import { createStore, combineReducers } from 'redux';
import itemReducer from './reducers/itemReducer';
import downloadedData from './reducers/downloadedData';
//import currentState from './reducers/downloadedData';

const rootReducer = combineReducers({
  itemReducer: itemReducer ,
  downloadedData: downloadedData
})

const configureStore = () => createStore(rootReducer);

export default configureStore;