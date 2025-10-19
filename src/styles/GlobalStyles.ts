import {createGlobalStyle} from "styled-components";
import {Fonts} from "../assets/fonts/Fonts.ts";
import {theme} from "./Theme.ts";

export const GlobalStyles = createGlobalStyle`
/* Reset and base styles  */
  * {
    padding: 0;
    margin: 0;
    border: none;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Epilogue",sans-serif;
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
  
  h2 {
    font-weight: 800;
    text-transform: uppercase;
  }
  
  ul, ul li {
    list-style: none;
  }
  
  //img {
  //  vertical-align: top;
  //  max-width: 100%;
  //  height: auto;
  //}
  
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

  header, section, footer:nth-of-type(odd) {
    background-color: ${theme.colors.oddBg};
    color: ${theme.colors.oddFont};
  
  h2 {
    color: ${theme.colors.titleFont};
  }
  
}

  section:nth-of-type(even) {
    background-color: ${theme.colors.evenBg};
    color: ${theme.colors.evenFont};
}
`