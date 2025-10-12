import MainImg from "../../../assets/images/main-img.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";


export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper>
        <div>
          <h2>HELLO I’M ABBY</h2>
          <h1>UI/UX Designer based in UK</h1>
        </div>
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

const Photo = styled.img`
  width: 570px;
  height: 570px;
  object-fit: cover;
`


