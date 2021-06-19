import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_MENU_DATA_REQUEST } from './constants';
// eslint-disable-next-line import/namespace,import/named
import { getMenuDataApi } from '../../../../api/dictionaries';
import { setMenuData } from './actions';

// Dictionaries
export function* getMenuDataSaga() {
  try {
    const menuData = yield call(getMenuDataApi);
    yield put(setMenuData(menuData));
  } catch (error) {
    // yield put(getTestDataFailed(error));
  }
}

export default function* getMenuDataSagaWatcher() {
  yield takeLatest(GET_MENU_DATA_REQUEST, getMenuDataSaga);
}
