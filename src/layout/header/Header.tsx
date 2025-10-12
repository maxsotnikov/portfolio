import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Navigation} from "../../components/navigation/Navigation.tsx";

const items = ["Projects", "About", "Digital Assets", "Let’s Talk"]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation navigationItems={items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 5px 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`