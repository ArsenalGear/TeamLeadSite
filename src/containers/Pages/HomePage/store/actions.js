import { GET_TEST_DATA_FAILED, GET_TEST_DATA_REQUEST, GET_TEST_DATA_SUCCESS } from './constants';

export const getTestData = () => ({
  type: GET_TEST_DATA_REQUEST,
});
export const setTestData = dictionary => ({
  type: GET_TEST_DATA_SUCCESS,
  dictionary,
});
export const getTestDataFailed = error => ({
  type: GET_TEST_DATA_FAILED,
  error,
});
