import { all } from 'redux-saga/effects';
import getTestDataSagaWatcher from './containers/Pages/HomePage/store/saga';

export default function* rootSaga() {
  yield all([getTestDataSagaWatcher()]);
}
