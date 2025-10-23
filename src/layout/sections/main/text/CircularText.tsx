import {theme} from "../../../../styles/Theme.ts";


export const CircularText = () => {
  return (
    <svg width="650" height="200" viewBox="0 0 650 200">
      <path
        id="curve-up"
        d="M 0,0 A 360,255 0 0 0 650,0"
        fill="transparent"
      />
      <text style={{
        fontSize: '51px',
        fontWeight: '300',
      }}>
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
      </text>
    </svg>
  );
};
