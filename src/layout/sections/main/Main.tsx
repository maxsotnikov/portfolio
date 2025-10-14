import MainImg from "../../../assets/images/main-img.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";


export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper>
        <MainTitle>
          <h2>HELLO I’M ABBY</h2>
          <h1>UI/UX Designer based in UK</h1>
        </MainTitle>
        <div>
          <Photo src={MainImg} alt={"main-image"}/>
        </div>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background-color: #fff;
`

const MainTitle = styled.div`
  h2 {
    font-family: "Epilogue", sans-serif;
    font-weight: 800;
    font-size: 150px;
    line-height: 1.175;
    //color: #2d2c2c;
  }
`

const Photo = styled.img`
  width: 570px;
  height: 570px;
  object-fit: cover;
`


