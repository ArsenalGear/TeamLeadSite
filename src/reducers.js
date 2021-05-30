import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './utils/history';
import { DictionaryReducer } from './containers/Pages/HomePage/store/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    dictionaries: DictionaryReducer,
    // language: persistReducer(languagePersistConfig, languageProviderReducer),
    ...injectedReducers,
  });

  return rootReducer;
}
