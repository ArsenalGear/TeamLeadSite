import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', 'Open Sans', sans-serif;
    margin: 0;
    font-family: 'Roboto', sans-serif;
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

  // #app {
  //   min-height: 100%;
  //   min-width: 100%;
  //   background-color: #F1F3F4;
  // }

  p, a, h1, h2, h3, h4, h5, h6, div, label, li, td {
    font-family: 'Roboto', sans-serif;
  }

  a:hover {
    text-decoration: none;
  }
`;
export {GlobalStyle};

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: orange[700],
    //   contrastText: common.white,
    // },
    secondary: {
      main: red[50],
      // light: '#c2c2c2',
      // secondary: grey[50],
    },
    // active: {
    //   main: lightGreen.A700,
    // },
    // error: {
    //   main: red[400],
    // },
  },
  typography: {
    p: {
      marginBottom: '0.5rem',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.2rem',
      letterSpacing: 'normal',
      '@media (min-width:1920px)': {
        fontSize: '1rem',
      },
    },
    h1: {
      fontWeight: 400,
      fontSize: '4rem',
      lineHeight: '5rem',
      // letterSpacing: 'normal',
      // '@media (min-width:1920px)': {
      //   fontSize: 24,
      // },
    },
    h2: {
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: '2.5rem',
      // marginTop: 8,
      // marginBottom: 16,
      // letterSpacing: 'normal',
      // '@media (min-width:1920px)': {
      //   fontSize: 24,
      // },
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
    },
    // subtitle2: {
    //   fontSize: 15,
    // },
    // paragrph
    body1: {
      fontSize: '1rem',
      marginBottom: '0.5rem',
      color: '#191919',
      '@media (min-width:1920px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      fontStyle: 'italic',
      wordBreak: 'break-word',
      color: '#191919',
      '@media (min-width:1920px)': {
        fontSize: '1rem',
      },
    },
  },
});
export {theme};
