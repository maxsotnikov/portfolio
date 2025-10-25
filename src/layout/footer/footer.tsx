import styled from "styled-components";
import {Contact} from "./contact/Contact.tsx";
import {SocialMedia} from "./socialmedia/SocialMedia.tsx";
import {Container} from "../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Contact/>
        <SocialMedia/>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 80px 0 55px;
  
  @media ${theme.media.tablet} {
    padding: 25px 0 20px;
  }
`