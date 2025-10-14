import {createGlobalStyle} from "styled-components";
import {Fonts} from "../assets/fonts/Fonts.tsx";

export const GlobalStyles = createGlobalStyle`
/* Reset and base styles  */
* {
  padding: 0px;
  margin: 0px;
  border: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Links */
a, a:link, a:visited  {
  text-decoration: none;
  color: inherit;
}

//a:hover  {
//  text-decoration: none;
//}

/* Common */
aside, nav, footer, header, section, main {
  display: block;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
}

ul, ul li {
  list-style: none;
}

img {
  vertical-align: top;
  max-width: 100%;
  height: auto;
}

/* Form */
input, textarea, button, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

button, input[type="submit"] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}

/* Fonts */
${Fonts}
`