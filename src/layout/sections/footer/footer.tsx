import styled from "styled-components";
import {Contact} from "./contact/Contact.tsx";
import {SocialMedia} from "./socialmedia/SocialMedia.tsx";

export const Footer = () => {
  return (
    <StyledFooter>
      <Contact/>
      <HorizontalLine/>
      <SocialMedia/>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  min-height: 50vh;
  background-color: #fff;
`

const HorizontalLine  = styled.hr`
  border: none;
  height: 1px;
  margin: 64px 0;
  width: 100%;
  background-color: #000;
`