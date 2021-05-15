import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background: #F5F7FA;
  }

  body {
    font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    display: flex;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: IBM Plex Sans, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    margin: 0;
  }
`;

export default GlobalStyle;
