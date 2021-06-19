import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './containers/App/App';
import { GlobalStyle, theme } from './global-styles';
// import '@babel/polyfill';
import history from './utils/history';
import configureStore from './configureStore';
import './styles.css';
// import { translationMessages } from './i18n';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <App history={history} />
      </MuiThemeProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // module.hot.accept(['./i18n'], () => {
  //   ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  //   render(translationMessages);
  // });
  ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  render();
}

if (!window.Intl) {
  // new Promise(resolve => {
  //   resolve(import('intl'));
  // })
  //   .then(() =>
  //     Promise.all([
  //       // import('intl/locale -data/jsonp/ru.js'),
  //       // import('intl/locale-data/jsonp/en.js'),
  //     ]),
  //   )
  //   .then(() => render(translationMessages))
  //   .catch(err => {
  //     throw err;
  //   });
} else {
  render();
}
