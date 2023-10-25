import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Manrope';
  src: url('./fonts/Manrope-Regular.ttf'), 
  url('./fonts/Manrope-Medium.ttf'), 
  url('./fonts/Manrope-SemiBold.ttf');
}

body {
  padding: 20px;
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  background-color: #fff;
  color: rgba(18, 20, 23, 0.50)
}

ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
}

.active {
  /* color: red; */
  /* background-color: blue; */
}



`;
