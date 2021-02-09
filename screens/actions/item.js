import {ADD_ITEM, DELETE_ITEM, DOWNLOAD_DATA, COMPARE_DATA} from './types';

export const addItem = (item) => ({
  type: ADD_ITEM,
  data: item,
});

export const deleteItem = (key) => ({
  type: DELETE_ITEM,
  key: key,
});

export const downloadData = (name) => ({
  type: DOWNLOAD_DATA,
  data: name,
});

export const compareData = (item) => ({
  type: COMPARE_DATA,
  data: item,
});
