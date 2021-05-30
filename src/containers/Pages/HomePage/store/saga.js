import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_SEXES_DICTIONARY_REQUEST } from './constants';
// eslint-disable-next-line import/namespace,import/named
import { getSexes } from '../../../../api/dictionaries';
import { setSexesDictionary } from './actions';

// Dictionaries
export function* getSexesDictionarySaga() {
  try {
    const sexesDictionary = yield call(getSexes);
    yield put(setSexesDictionary(sexesDictionary));
  } catch (error) {
    // yield put(getSexesDictionaryFailed(error));
  }
}

export default function* getSexesDictionarySagaWatcher() {
  yield takeLatest(GET_SEXES_DICTIONARY_REQUEST, getSexesDictionarySaga);
}
