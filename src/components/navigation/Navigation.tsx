import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Navigation = (props: {navigationItems: Array<string>}) => {
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
    justify-content: flex-end;
  }
`

const Link = styled.a`
  font-family: "Epilogue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 20px;
  
  &:hover {
    background-color: ${theme.colors.titleFont};
    color: ${theme.colors.evenFont};
  }
`