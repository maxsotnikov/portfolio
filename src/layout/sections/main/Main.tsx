import MainImg from "../../../assets/images/main-img.webp"
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {CircularText} from "./text/CircularText.tsx";
// import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <MainWrapper>
        {/*<FlexWrapper>*/}
          <MainTitle>
            <h2>Hello<br/> <span>i'm Abby</span> </h2>
            <div>
              <CircularText/>
            </div>
          </MainTitle>
          <PhotoWrapper>
            <Photo src={MainImg} alt={"main-image"}/>
          </PhotoWrapper>
        {/*</FlexWrapper>*/}
        </MainWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  //min-height: 100vh;
  padding: 50px 0 100px;
  display: flex;
`

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  
  @media ${theme.media.desktop1} {
    flex-direction: column; /* текст сверху, фото снизу */
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media ${theme.media.mobile} {
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
  left: -115px;
  top: 10px;
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
    width: 560px;
    height: 560px;
    background: #e7e7e7;
    transform: rotate(-8deg);
    
    position: absolute;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 300px;
      height: 300px;
    }
  }
`

const Photo = styled.img`
  width: 560px;
  height: 560px;
  object-fit: cover;
  transform: rotate(10deg);
  opacity: 0.9;
  border: red solid 1px;

  @media ${theme.media.mobile} {
    width: 300px;
    height: 300px;
  }
`