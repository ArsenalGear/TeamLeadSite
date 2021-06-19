import { all } from 'redux-saga/effects';
import getMenuDataSagaWatcher from './containers/Pages/HomePage/store/saga';

export default function* rootSaga() {
  yield all([getMenuDataSagaWatcher()]);
}
