import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Navigation} from "../../components/navigation/Navigation.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {theme} from "../../styles/Theme.ts";
import {MobileMenu} from "./mobile-menu/MobileMenu.tsx";

const items = ["Projects", "About", "Digital Assets", "Let’s Talk"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <NavigationWrapper>
            <Navigation navigationItems={items} />
          </NavigationWrapper>
          <MobileWrapper>
            <LetsTalkLink>Let's Talk</LetsTalkLink>
            <MobileMenu></MobileMenu>
          </MobileWrapper>

        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px 0;
`

const NavigationWrapper = styled.div`
    @media ${theme.media.tablet} {
      display: none;
    }
`

const MobileWrapper = styled(FlexWrapper)`
  display: none;
  
  @media ${theme.media.tablet} {
    display: flex;
    align-items: center;
    gap: 35px;
  }
`

const LetsTalkLink = styled.a`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 20px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.titleFont};
      color: ${theme.colors.evenFont};
    }
  }
`