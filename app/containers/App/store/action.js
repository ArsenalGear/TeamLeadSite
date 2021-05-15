import { SET_ERROR } from '../constants';

export const setErrorData = errorData => ({
  type: SET_ERROR,
  errorData,
});
