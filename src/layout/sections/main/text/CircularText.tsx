import {theme} from "../../../../styles/Theme.ts";
import styled from "styled-components";
import {font} from "../../../../styles/Common.ts";


export const CircularText = () => {
  return (
    <Svg viewBox="0 0 650 200">
      <path
        id="curve-up"
        d="M 0,0 A 360,255 0 0 0 650,0"
        fill="transparent"
      />
<StyledCircularText>
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
</StyledCircularText>
    </Svg>
  );
};

const Svg = styled.svg`
  transform: translateY(calc( (100vw - 375px)/(1540 - 375) * (-40px) ));
`

const StyledCircularText = styled.text`
  ${font({ weight: 300, Fmax: 51, Fmin: 51 })}
`;
