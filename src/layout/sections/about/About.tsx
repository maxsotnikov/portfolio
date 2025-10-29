import styled from "styled-components";
import {AboutTitleWrapper} from "./about-title-wrapper/AboutTitleWrapper.tsx";
import Image from "../../../assets/images/main-img.webp"
import {AboutDescription} from "./about-description/AboutDescription.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const About = () => {
  return (
    <StyledAbout id={'about'}>
      <Container>
        <AboutWrapper>
          <LeftColumnWrapper>
            <AboutTitleWrapper title={'I look at usual things with my unsual eyes.'} />
            <FirstPhoto src={Image} alt="" />
          </LeftColumnWrapper>
          <RightColumnWrapper>
            <AboutDescription/>
            <SecondPhoto src={Image} alt="" />
          </RightColumnWrapper>
        </AboutWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 110px 0 205px;
  
  @media ${theme.media.desktop2} {
    padding: 50px 0 95px;
  }
`

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const LeftColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 238px;
  
  @media ${theme.media.desktop2} {
    gap: 30px;
  }
`

const FirstPhoto  = styled.img`
  max-width: 532px;
  width: 100%;
  object-fit: cover;
`

const RightColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 310px;
  
  @media ${theme.media.desktop2} {
    padding-top: 40px;
    gap: 60px;
    align-items: center;
    
  }
`

const SecondPhoto  = styled.img`
  max-width: 440px;
  width: 100%;
  object-fit: cover;
  
  @media ${theme.media.mobile} {
    max-width: 275px;
    width: 100%;
  }
`