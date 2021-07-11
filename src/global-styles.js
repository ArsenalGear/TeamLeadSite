import { createGlobalStyle } from 'styled-components';
import { grey } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #1e1e1e;
  }

  body {
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
  }

  p, a, h1, h2, h3 div, label, li, td {
    font-family: 'Roboto', sans-serif;
  }

  a:hover {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  section {
    width: 100%;
    //min-height: 100vh;
    margin-bottom: 7rem;
  }

  .MuiGrid-container {
    max-width: 1170px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1280px) {
    html {
      font-size: 12px;
    }
    ul {
      padding-left: 1rem;
    }
  }
`;
export { GlobalStyle };

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      white: '#fafafa',
      blue: '#61dbfb',
      grey: grey[400],
      darkGrey: '#343a40',
    },
    secondary: {
      main: grey[50],
    },
  },
  typography: {
    h1: {
      wordBreak: 'break-word',
      fontWeight: 400,
      fontSize: '5rem',
      lineHeight: '6rem',
    },
    h2: {
      wordBreak: 'break-word',
      fontWeight: 400,
      fontSize: '4.5rem',
      lineHeight: '5rem',
      color: '#26282a',
    },
    h3: {
      marginBottom: '0.75rem',
      wordBreak: 'break-word',
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: '2rem',
    },
    body1: {
      marginBottom: '1rem',
      fontSize: '1rem',
      wordBreak: 'break-word',
      color: '#fafafa',
      '@media (max-width:1280px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      fontStyle: 'italic',
      wordBreak: 'break-word',
      color: '#fafafa',
      '@media (max-width:1280px)': {
        fontSize: '1rem',
      },
    },
  },
});
export { theme };
