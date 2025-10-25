import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 70px;
  ${font({weight: 800, color: theme.colors.titleFont, lineHeight: 0.9, Fmax: 120, Fmin: 65})}
`