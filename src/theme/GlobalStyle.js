import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;700&display=swap');

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Montserrat', sans-serif;
    box-sizing: inherit;
    font-size: 1.6rem;
    overflow-X: hidden;
    background-color: ${({ dark }) => dark && "rgba(0, 0, 0, 1)"};
    color: ${({ dark }) => dark && "rgba(255, 255, 255, 1)"};
}

`;

export default GlobalStyle;
