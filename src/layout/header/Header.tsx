  import styled from "styled-components";
  import {Logo} from "../../components/logo/Logo.tsx";
  import {Menu} from "../../components/menu/Menu.tsx";
  import {Container} from "../../components/Container.ts";
  import {FlexWrapper} from "../../components/FlexWrapper.ts";
  import {theme} from "../../styles/Theme.ts";
  import {MobileMenu} from "./mobile-menu/MobileMenu.tsx";
  import {ContactForm} from "./contact-form/ContactForm.tsx";

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
              <ContactForm/>
              <Menu menuItems={items} />
            </NavigationWrapper>
            <MobileWrapper>
              <ContactForm/>
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
    display: flex;
    flex-direction: row-reverse;
    gap: 30px;
    
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