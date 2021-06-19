import { GET_MENU_DATA_FAILED, GET_MENU_DATA_REQUEST, GET_MENU_DATA_SUCCESS } from './constants';

export const getMenuData = () => ({
  type: GET_MENU_DATA_REQUEST,
});
export const setMenuData = dictionary => ({
  type: GET_MENU_DATA_SUCCESS,
  dictionary,
});
export const getMenuDataFailed = error => ({
  type: GET_MENU_DATA_FAILED,
  error,
});
