import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    padding: 0;
    margin: 0;
    font-family: 'Pacifico', cursive;
  }

  p {
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a, button {
    cursor: pointer;
  }

  input, button {
    font-family: inherit;
  }
`;