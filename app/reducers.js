import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import history from 'utils/history';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const languagePersistConfig = {
  key: 'language',
  storage,
};

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    language: persistReducer(languagePersistConfig, languageProviderReducer),
    ...injectedReducers,
  });

  return rootReducer;
}
