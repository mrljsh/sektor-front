import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&display=swap');

  *,
  *::before,
  *::after{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    scroll-behavior:smooth
  }
  
  a {
    text-decoration:none; color:inherit; cursor:pointer;
  }
  
  button {
    background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;
  }
  
  input::-moz-focus-inner {
    border:0; padding:0; margin:0;
  }
  
  ul, ol, dd {
    margin:0; padding:0; list-style:none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin:0; font-size:inherit; font-weight:inherit;
  }

  p {
    margin:0;
    }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
