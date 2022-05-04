import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  button,input{
    border: none;
    outline: none;
  }
  button{
    cursor: pointer;
  }

  ul,ol,li{
    list-style: none;
  }
  body{
    font-family: 'Poppins', sans-serif;
  }
`;
