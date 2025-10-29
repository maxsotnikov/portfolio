import MainImg from "../../../assets/images/main-img.webp"
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {CircularText} from "./text/CircularText.tsx";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <MainWrapper>
          <MainTitle>
            <h2>Hello<br /> <span>i'm Abby</span></h2>
            <div>
              <CircularText />
            </div>
          </MainTitle>
          <PhotoWrapper>
            <Photo
              src={MainImg}
              alt={"main-image"}
            />
          </PhotoWrapper>
        </MainWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding: 50px 0 135px;
  display: flex;

  @media ${theme.media.tablet} {
    padding: 60px 0 125px;
  }
`

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  
  @media ${theme.media.desktop2} {
    flex-direction: column;
  }

  @media ${theme.media.mobile} {
    align-items: flex-start;
  }
`

const MainTitle = styled.div`
  position: relative;
  z-index: 1;

  h2 {
    ${font({
      weight: 800,
      color: theme.colors.titleFont,
      lineHeight: 1.1,
      Fmax: 150,
      Fmin: 75
    })} 
    
    @media ${theme.media.desktop2} {
    text-align: center;
  }

    @media ${theme.media.mobile} {
      text-align: left;
    }

    span {
      white-space: nowrap;
    }
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  left: -125px;
  top: 40px;
  z-index: 0;
  max-width: 570px;
  width: 100%;
  flex-shrink: 0;

  @media ${theme.media.desktop2} {
    left: 0;
  }

  @media ${theme.media.tablet} {
    width: 90%;
  }

  @media ${theme.media.mobile} {
    width: 85%;
    left: 35px;
  }

  &::before {
    content: "";
    width: 100%;
    inset: 0;
    background: #e7e7e7;
    transform: rotate(-8deg);

    position: absolute;
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 100%;
  object-fit: cover;
  transform: rotate(7.5deg);
  opacity: 0.9;
  //border: red solid 1px;
`