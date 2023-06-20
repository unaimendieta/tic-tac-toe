import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
body {
    font-family: 'Outfit', sans-serif;
    height: 100vh;
    width: 100vw;
    background: #1A2A33;
}
`;

export {GlobalStyles};