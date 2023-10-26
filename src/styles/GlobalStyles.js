import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';
import './fonts.css';

export const GlobalStyles = createGlobalStyle`

:root {
    --bg: #fff;
    --inputBg: #F7F7FB;
    --subBg: #F9F9F9;
    --general: #121417;
    --subText: #12141780;
    --auxSubText: #363535;
    --btnMain: #3470FF;
    --hoverActive: #0B44CD;
  }

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-color: var(--bg);
  color: var(--general)
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
