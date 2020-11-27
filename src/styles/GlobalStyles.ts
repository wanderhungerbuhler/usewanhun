
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{margin:0; padding:0; box-sizing:border-box; outline: 0;}
 
  html { scroll-behavior: smooth; }

  body {
    background: #F0F0F5;
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  input, textarea, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
  
`;