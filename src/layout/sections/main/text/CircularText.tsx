import { font } from "../../../../styles/Common.ts";
import {theme} from "../../../../styles/Theme.ts";
import styled from "styled-components";

const StyledText = styled('text')`
  font-weight: 300;
  fill: ${theme.colors.titleFont};
  line-height: 1.1;
  font-size: calc((100vw - 375px) / (1440 - 375) * (51 - 28) + 28px);
`;

export const CircularText = () => {
  return (
    <svg width="650" height="200" viewBox="0 0 650 200">
      <path
        id="curve-up"
        d="M 0,0 A 360,255 0 0 0 650,0"
        fill="transparent"
      />
      {/*<text style={{*/}
      {/*  // fontSize: '51px',*/}
      {/*  // fontWeight: '300',*/}
      {/*}}>*/}
      {/*  */}

      <StyledText>
        <textPath href="#curve-up" startOffset="50%" textAnchor="middle">
          <tspan style={{ fontWeight: '600', stroke:`${theme.colors.oddFont}`, fill: `${theme.colors.evenFont}` }}>UI</tspan>
          /
          <tspan style={{ fontWeight: '600', stroke:`${theme.colors.oddFont}`, fill: `${theme.colors.evenFont}` }}>UX </tspan>
          <tspan style={{ fontWeight: '800', fill: `${theme.colors.titleFont}` }}>D</tspan>
          esi
          <tspan style={{ fontWeight: '800', fill: `${theme.colors.titleFont}` }}>g</tspan>
          ne
          <tspan style={{ fontWeight: '800', fill: `${theme.colors.titleFont}` }}>r </tspan>
          based in UK
        </textPath>
      </StyledText>

      {/*</text>*/}
    </svg>
  );
};
