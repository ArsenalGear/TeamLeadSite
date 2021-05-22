import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { GlobalStyle, theme } from './global-styles';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
