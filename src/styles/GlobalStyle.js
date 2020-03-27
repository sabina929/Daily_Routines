import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --violet: #8d02e4;
    --white: #f7f5ff;
    --pink: rgb(255, 147, 165);
    --blue: rgb(116, 54, 223);
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    font-family: Helvetica, sans-serif;
    overflow: hidden;
  }
  h1{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    text-align: center;
    color: var(--blue);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-shadow: 5px 3px var(--pink);
   }
   
  
  @media only screen and (max-width: 900px) {
    h1{
        top: 12.5%;
        font-size: 4rem;
       }
  }
  @media only screen and (max-width: 600px) {
    h1{
        top: 12.5%;
        font-size: 3rem;
       }
  }
  @media only screen and (max-width: 400px) {
    h1{
        top: 12.5%;
        font-size: 2.6rem;
        width: 70%;
        text-shadow: 3px 2px var(--pink);
       }
  
  }
`;