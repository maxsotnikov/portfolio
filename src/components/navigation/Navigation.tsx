import styled from "styled-components";

export const Navigation = (props: {navigationItems: Array<string>}) => {
  return (
    <Nav>
      <ul>
        {props.navigationItems.map((item) => {
          return (
            <li>
              <a href="">{item}</a>
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
    gap: 32px;
  }
  
  a {
    text-decoration: none;
  }
`
