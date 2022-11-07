import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  .react-grid-item{
    border:1px solid black
  }

  body {
    background: ${({ theme }) => theme.background.body};
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: hsl(192, 100%, 9%);
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

`;
