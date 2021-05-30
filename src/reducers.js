import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import languageProviderReducer from 'containers/LanguageProvider/reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import history from './utils/history';
import { DictionaryReducer } from './containers/Pages/HomePage/store/reducer';
// import HomePageReducer from './containers/HomePage/store/reducer';
// import { PreloaderReducer, errorReducer } from './containers/App/store/reducer';
// import { ServicesReducer } from './containers/Services/store/reducer';
// import {
//   BusinessProcessReducer,
//   DictionaryReducer,
// } from './containers/BusinessProcess/store/reducer';

const languagePersistConfig = {
  key: 'language',
  storage,
};

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    dictionaries: DictionaryReducer,
    // language: persistReducer(languagePersistConfig, languageProviderReducer),
    ...injectedReducers,
  });

  return rootReducer;
}
