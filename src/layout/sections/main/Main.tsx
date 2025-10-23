import MainImg from "../../../assets/images/main-img.webp"
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {CircularText} from "./text/CircularText.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        {/*<MainWrapper>*/}
        <FlexWrapper>
          <MainTitle>
            <h2>Hello<br/> i'm Abby</h2>
            <div>
              <CircularText/>
            </div>
          </MainTitle>
          <PhotoWrapper>
            <Photo src={MainImg} alt={"main-image"}/>
          </PhotoWrapper>
        </FlexWrapper>

        {/*</MainWrapper>*/}
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
`

// const MainWrapper = styled.div`
//   display: flex;
//   height: 100%;
//
//   position: relative;
//   z-index: 2;
// `

const MainTitle = styled.div`
  position: relative;
  z-index: 1;
  
  h2 {
    font-size: 150px;
    line-height: 1.1;
    min-width: 650px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  left: -115px;
  top: 10px;
  z-index: 0;
  
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 560px;
    background: #e7e7e7;
    transform: rotate(-8deg);
    
    position: absolute;
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 560px;
  height: 560px;
  object-fit: cover;
  transform: rotate(10deg);
  opacity: 0.9;
`