import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";
import {ContactForm} from "../../header/contact-form/ContactForm.tsx";

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

export const Contact = () => {
  return (
    <StyledContact>
      <NavigationWrapper>
        <Logo/>
        <Menu menuItems={items}/>
      </NavigationWrapper>
      <SubscribeWrapper>
        <ContactTitle>Let’s work together</ContactTitle>
        <ContactDescription>I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</ContactDescription>
        <ContactForm/>
      </SubscribeWrapper>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 130px;
  gap: 20px;
  
  @media ${theme.media.tablet} {
    margin-bottom: 45px;
  }
  
  @media ${theme.media.mobile} {
    display: block;
  }
  
  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.oddFont};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -65px;
    
    @media ${theme.media.tablet} {
      bottom: -22px;
    }
  }  
`

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media ${theme.media.tablet} {
    gap: 10px;
  }
`

const SubscribeWrapper = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
`

const ContactTitle = styled.h3`
  ${font({weight: 800, color: theme.colors.oddFont, Fmax: 30, Fmin: 22})}
  text-align: center;
`

const ContactDescription = styled.p`
  ${font({weight: 400, color: theme.colors.oddFont, Fmax: 16, Fmin: 16})}
`