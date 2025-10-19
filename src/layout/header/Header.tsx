import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Navigation} from "../../components/navigation/Navigation.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";

const items = ["Projects", "About", "Digital Assets", "Let’s Talk"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Navigation navigationItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px 0;
`