import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_TEST_DATA_REQUEST } from './constants';
// eslint-disable-next-line import/namespace,import/named
import { getTestDataApi } from '../../../../api/dictionaries';
import { setTestData } from './actions';

// Dictionaries
export function* getTestDataSaga() {
  try {
    const testData = yield call(getTestDataApi);
    yield put(setTestData(testData));
  } catch (error) {
    // yield put(getTestDataFailed(error));
  }
}

export default function* getTestDataSagaWatcher() {
  yield takeLatest(GET_TEST_DATA_REQUEST, getTestDataSaga);
}
