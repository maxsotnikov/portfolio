import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";

export const Navigation = (props: { navigationItems: Array<string> }) => {
  return (
    <Nav>
      <ul>
        {props.navigationItems.map((item) => {
          return (
            <li>
              <Link href="">{item}</Link>
            </li>
          )
        })}
      </ul>
    </Nav>

  );
};

const Nav = styled.nav`
  ul {
    display: flex;
  }
`

const Link = styled.a`
  padding: 8px 20px;
  ${font({weight: 400, color: theme.colors.titleFont, Fmax: 16, Fmin: 14})}

  &:hover {
    background-color: ${theme.colors.titleFont};
    color: ${theme.colors.evenFont};
  }
`