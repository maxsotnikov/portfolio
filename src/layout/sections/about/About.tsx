import styled from "styled-components";
import {AboutTitleWrapper} from "./about-title-wrapper/AboutTitleWrapper.tsx";
import Image from "../../../assets/images/main-img.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {AboutDescription} from "./about-description/AboutDescription.tsx";

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper direction="column">
        <AboutTitleWrapper title={'I look at usual things with my unsual eyes.'} />
        <Photo src={Image} alt="" />
      </FlexWrapper>
      <FlexWrapper direction="column">
        <AboutDescription/>
        <Photo src={Image} alt="" />
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  background-color: #131212;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
`

const Photo  = styled.img`
  max-width: 532px;
  max-height: 498px;
  object-fit: cover;
`