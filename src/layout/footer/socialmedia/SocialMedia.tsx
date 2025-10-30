import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import styled from "styled-components";
import {SocialLinks} from "../../../components/social-links/SocialLinks.tsx";

export const SocialMedia = () => {
  return (
    <FlexWrapper justify="space-between">
      <Copyright>Made by Max Sotnikov 2025</Copyright>
      <SocialLinks/>
    </FlexWrapper>
  );
};

const Copyright = styled.small`
`
