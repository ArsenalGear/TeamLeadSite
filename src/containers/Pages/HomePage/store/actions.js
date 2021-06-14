import {
  GET_SEXES_DICTIONARY_FAILED,
  GET_SEXES_DICTIONARY_REQUEST,
  GET_SEXES_DICTIONARY_SUCCESS,
} from './constants';

export const getSexesDictionary = () => ({
  type: GET_SEXES_DICTIONARY_REQUEST,
});
export const setSexesDictionary = dictionary => ({
  type: GET_SEXES_DICTIONARY_SUCCESS,
  dictionary,
});
export const getSexesDictionaryFailed = error => ({
  type: GET_SEXES_DICTIONARY_FAILED,
  error,
});
