import styled from "styled-components";
import {AboutTitleWrapper} from "./about-title-wrapper/AboutTitleWrapper.tsx";
import Image from "../../../assets/images/main-img.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {AboutDescription} from "./about-description/AboutDescription.tsx";
import {Container} from "../../../components/Container.ts";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <AboutWrapper>
          <FlexWrapper direction="column" gap={'238px'}>
            <AboutTitleWrapper title={'I look at usual things with my unsual eyes.'} />
            <FirstPhoto src={Image} alt="" />
          </FlexWrapper>
          <FlexWrapper direction="column">
            <AboutDescription/>
            <SecondPhoto src={Image} alt="" />
          </FlexWrapper>
        </AboutWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 110px 0 205px;
  
`

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const FirstPhoto  = styled.img`
  width: 532px;
  height: 498px;
  object-fit: cover;
`

const SecondPhoto  = styled.img`
  width: 440px;
  height: 412px;
  object-fit: cover;
`