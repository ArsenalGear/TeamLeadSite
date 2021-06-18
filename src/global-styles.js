import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #f2f4f5;
  }

  body {
    font-family: 'Roboto', 'Open Sans', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  input[type=number],
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Open Sans', sans-serif;
  }

  #app {
    // min-height: 100%;
    // min-width: 100%;
    // background-color: #f2f4f5;
  }

  p, a, h1, h2, h3, h4, h5, h6, div, label, li, td {
    font-family: 'Roboto', sans-serif;
  }

  a:hover {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;
export { GlobalStyle };

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
      // contrastText: common.white,
    },
    secondary: {
      main: grey[50],
      // secondary: grey[50],
    },
  },
  typography: {
    h1: {
      fontWeight: 400,
      fontSize: '5rem',
      lineHeight: '6rem',
    },
    h2: {
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: '2.5rem',
      color: '#26282a',
    },
    h3: {
      marginBottom: '0.75rem',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      color: '#26282a',
    },
    body1: {
      fontSize: '1rem',
      marginBottom: '0.5rem',
      color: '#6d6d6e',
      '@media (min-width:1920px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      fontStyle: 'italic',
      wordBreak: 'break-word',
      color: '#6d6d6e',
      '@media (min-width:1920px)': {
        fontSize: '1rem',
      },
    },
  },
});
export { theme };
