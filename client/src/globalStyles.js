import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
      padding: 0;
    }
  }
`;
