import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    position: relative;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: 'Poppins', sans-serif;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  button {
    background-color: inherit;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1254px;
  padding: 0 15px;
  margin: 0 auto;
`;

export default GlobalStyle;
