  import styled from "styled-components";
  import {Logo} from "../../components/logo/Logo.tsx";
  import {Menu} from "../../components/navigation/Menu.tsx";
  import {Container} from "../../components/Container.ts";
  import {FlexWrapper} from "../../components/FlexWrapper.ts";
  import {theme} from "../../styles/Theme.ts";
  import {MobileMenu} from "./mobile-menu/MobileMenu.tsx";

  // const items = ["Projects", "About", "Digital Assets", "Let’s Talk"]
  const items = [
    {
      title: "Projects",
      href: "projects"
    },
    {
      title: "About",
      href: "about"
    },
    {
      title: "Digital Assets",
      href: "digital-assets"
    },
    {
      title: "Let's Talk",
      href: "#"
    }
  ]

  // const mobileItems = ['Projects', 'About', 'Digital Assets']
  const mobileItems = [
    {
      title: "Projects",
      href: "projects"
    },
    {
      title: "About",
      href: "about"
    },
    {
      title: "Digital Assets",
      href: "digital-assets"
    },
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
    //position: fixed;
    //top: 0;
    //right: 0;
    //left: 0;
    //z-index: 1000;
    
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
      gap: 35px;
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