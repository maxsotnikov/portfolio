import {font} from "../styles/Common.ts";
import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Button = styled.button<{ isOpen: boolean }>`
  ${font({weight: 400, lineHeight: 1.5, color: theme.colors.evenFont, Fmax: 16, Fmin: 16})}
  padding: 8px 20px;
  transition: ${theme.animations.transition};
  background-color: ${theme.colors.titleFont};
  position: relative;
  
  &:active {
    background-color: transparent;
    border: 1px solid ${theme.colors.oddFont};
    color: ${theme.colors.oddFont};
  }
`