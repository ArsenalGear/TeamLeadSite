import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './rootSaga';

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};
  const persistedState = loadFromLocalStorage();

  function loadFromLocalStorage() {
    try {
      const serializedState = JSON.parse(localStorage.getItem('store'));
      if (serializedState == null) return undefined;
      serializedState.preloader.loading = false;
      return serializedState;
    } catch (e) {
      // console.log(e);
      return undefined;
    }
  }
  function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('store', serializedState);
    } catch (e) {
      // console.log(e);
    }
  }

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    /* eslint-enable */
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    // initialState,
    persistedState,
    composeEnhancers(...enhancers),
  );

  store.subscribe(() => saveToLocalStorage(store.getState()));
  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  sagaMiddleware.run(rootSaga);

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
