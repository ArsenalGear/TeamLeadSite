import { all } from 'redux-saga/effects';
import getSexesDictionarySagaWatcher from './containers/Pages/HomePage/store/saga';

export default function* rootSaga() {
  yield all([getSexesDictionarySagaWatcher()]);
}
