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
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #2d2c2c;
    display: flex;
    justify-content: flex-end;
    gap: 32px;
  }
  
  a {
    text-decoration: none;
  }
`
