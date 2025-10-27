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
            <h2>Hello<br/> <span>i'm Abby</span> </h2>
            <div>
              <CircularText/>
            </div>
          </MainTitle>
          <PhotoWrapper>
            <Photo src={MainImg} alt={"main-image"}/>
          </PhotoWrapper>
        </MainWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  //min-height: 100vh;
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
  //justify-content: space-between;
  
  @media ${theme.media.desktop1} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media ${theme.media.tablet} {
    align-items: flex-start;
  }
`

const MainTitle = styled.div`
  position: relative;
  z-index: 1;
  
  h2 {
    ${font({weight: 800, color: theme.colors.titleFont, lineHeight: 1.1, Fmax: 150, Fmin: 75})}
    
    @media ${theme.media.desktop1} {
    text-align: center;
  }

    @media ${theme.media.tablet} {
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

  @media ${theme.media.desktop1} {
    position: static;
  }

  @media ${theme.media.desktop1} {
    position: relative;
    left: 15px;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 570px;
    height: 570px;
    background: #e7e7e7;
    transform: rotate(-8deg);

    position: absolute;
    z-index: -1;

    @media ${theme.media.tablet} {
      width: 300px;
      height: 300px;
    }
  }
`

const Photo = styled.img`
  width: 570px;
  height: 570px;
  object-fit: cover;
  transform: rotate(7.5deg);
  opacity: 0.9;
  //border: red solid 1px;

  @media ${theme.media.tablet} {
    max-width: 300px;
    max-height: 300px;
  }
`

// const PhotoWrapper = styled.div`
//   position: relative;
//   z-index: 0;
//   max-width: 570px;
//   min-width: 300px;
//   width: 100%;
//   left: -100px;
//
//   &::before {
//     content: "";
//     position: absolute;
//     display: inline-block;
//     width: 100%;
//     height: 100%;
//     background: #e7e7e7;
//     transform: rotate(-8deg);
//     z-index: -1;
//     inset: 0;
//   }
// `
//
// const Photo = styled.img`
//   //width: 100%;
//   width: 570px;
//   object-fit: cover;
//   transform: rotate(10deg);
//   opacity: 0.9;
//
//   border: red solid 1px;
// `