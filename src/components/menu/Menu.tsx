import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";
import {Link} from "react-scroll";

type MenuItemProps = {
  title: string;
  href: string;
}

export const Menu = (props: { menuItems: Array<MenuItemProps> }) => {
  return (
    <Nav>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <MenuLink to={item.href} smooth={true}>{item.title}</MenuLink>
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
    
    li {
     display: flex;
      cursor: pointer;
    }
  }
`

const MenuLink = styled(Link)`
  padding: 8px 20px;
  ${font({weight: 400, color: theme.colors.titleFont, Fmax: 16, Fmin: 14})}
  transition: ${theme.animations.transition};

  &:hover {
    background-color: ${theme.colors.titleFont};
    color: ${theme.colors.evenFont};
  }
`