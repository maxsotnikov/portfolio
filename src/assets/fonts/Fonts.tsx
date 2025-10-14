import {css} from "styled-components";
import epilogueThin from "./epilogue/Epilogue-Thin.woff2"
import epilogueExtraLight from "./epilogue/Epilogue-ExtraLight.woff2"
import epilogueLight from "./epilogue/Epilogue-Light.woff2"
import epilogueRegular from "./epilogue/Epilogue-Regular.woff2"
import epilogueSemiBold from "./epilogue/Epilogue-SemiBold.woff2"
import epilogueBold from "./epilogue/Epilogue-Bold.woff2"
import epilogueExtraBold from "./epilogue/Epilogue-ExtraBold.woff2"
import epilogueBlack from "./epilogue/Epilogue-Black.woff2"
import robotoLight from "./roboto/Roboto-Light.woff2"
import robotoRegular from "./roboto/Roboto-Regular.woff2"


export const Fonts = css`
  /* Epilogue Font Family */
  @font-face {
    font-family: "Epilogue";
    src: url(${epilogueThin}) format("woff2");
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Epilogue";
    src: url(${epilogueExtraLight}) format("woff2");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Epilogue";
    src: url(${epilogueLight}) format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Epilogue";
    src: url(${epilogueRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Epilogue";
    src: url(${epilogueSemiBold}) format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Epilogue";
    src: url(${epilogueBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Epilogue";
    src: url(${epilogueExtraBold}) format("woff2");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Epilogue";
    src: url(${epilogueBlack}) format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  
  /* Roboto Font Family */
  @font-face {
    font-family: "Roboto";
    src: url(${robotoLight}) format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${robotoRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`