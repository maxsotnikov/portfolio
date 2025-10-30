  import styled from "styled-components";
  import {Logo} from "../../components/logo/Logo.tsx";
  import {Menu} from "../../components/menu/Menu.tsx";
  import {Container} from "../../components/Container.ts";
  import {FlexWrapper} from "../../components/FlexWrapper.ts";
  import {theme} from "../../styles/Theme.ts";
  import {MobileMenu} from "./mobile-menu/MobileMenu.tsx";

  const items = [
    {
      title: "Skills",
      href: "skills"
    },
    {
      title: "Projects",
      href: "projects"
    },
    {
      title: "About",
      href: "about"
    },
    {
      title: "Let's Talk",
      href: "#"
    }
  ]

  const mobileItems = [
    {
      title: "Skills",
      href: "skills"
    },
    {
      title: "Projects",
      href: "projects"
    },
    {
      title: "About",
      href: "about"
    }
  ]

  export const Header = () => {
    return (
      <StyledHeader>
        <Container>
          <FlexWrapper justify="space-between" align="center">
            <Logo />
            <NavigationWrapper>
              <Menu menuItems={items} />
            </NavigationWrapper>
            <MobileWrapper>
              <LetsTalkLink>Let's Talk</LetsTalkLink>
              <MobileMenu menuItems={mobileItems}></MobileMenu>
            </MobileWrapper>
          </FlexWrapper>
        </Container>
      </StyledHeader>
    );
  };

  const StyledHeader = styled.header`
    padding: 20px 0;
    
    @media ${theme.media.tablet} {
      padding: 0;
    }
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
      gap: 15px;
    }
  `

  const LetsTalkLink = styled.a`
    display: none;
    @media ${theme.media.tablet} {
      display: block;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      padding: 8px 20px;
      cursor: pointer;
      transition: ${theme.animations.transition};
  
      &:hover {
        background-color: ${theme.colors.titleFont};
        color: ${theme.colors.evenFont};
      }
    }
  `