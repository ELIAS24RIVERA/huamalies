// src/styles/globalStyle.js
import { createGlobalStyle } from 'styled-components'; // Ya está importado
import styled from 'styled-components'; // Agrega esta línea

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #f4f6f9;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
