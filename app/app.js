/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import ui-library and support provider
import {
  StylesProvider,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
// import {
//   orange,
//   grey,
//   red,
//   lightGreen,
//   common,
// } from '@material-ui/core/colors';
import { ThemeProvider } from 'styled-components';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

// Import i18n messages

// Import MuiPickers Provider for ui date pickers
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';

// Create set theme mui
import { ruRU } from '@material-ui/core/locale';
import { translationMessages } from './i18n';
import configureStore from './configureStore';
// import { PickersUtilsProvider } from './containers/PickersUtilsProvider';
const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#2999C1',
      },
    },
  },
  ruRU,
);

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <MuiThemeProvider theme={theme}>
              <StylesProvider injectFirst>
                <App history={history} />
              </StylesProvider>
            </MuiThemeProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/ru.js'),
        import('intl/locale-data/jsonp/en.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
