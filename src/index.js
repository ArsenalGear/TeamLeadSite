import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './containers/App/App';
import { GlobalStyle, theme } from './global-styles';
import history from './utils/history';
import configureStore from './configureStore';
import './styles.css';

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <App history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
