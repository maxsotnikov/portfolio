import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type ProjectProps = {
  img: string;
  title: string;
  firstProjectTitle: string;
  secondProjectTitle: string;
  description: string;

}

export const Project = (props: ProjectProps) => {
  return (
    <StyledProject img={props.img}>
      <ContentWrapper>
        <TitleWrapper>
          <Title>{props.title}</Title>
          <FirstProjectTitle>{props.firstProjectTitle}</FirstProjectTitle>
          <SecondProjectTitle>{props.secondProjectTitle}</SecondProjectTitle>
        </TitleWrapper>
        <DescriptionWrapper>
          <Description>{props.description}</Description>
          <Link href={'#'}>View More</Link>
        </DescriptionWrapper>
      </ContentWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.article<{img: string}>`
  width: 100%;
  height: 445px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.8);
    opacity: 0.6;
    
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`

const ContentWrapper = styled.div`
  padding: 0 45px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  color: ${theme.colors.evenFont};
  position: relative;
  z-index: 2;
`
const TitleWrapper = styled.div`
  padding: 92px 0 153px;
  
`

const Title = styled.h4`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;
`

const FirstProjectTitle = styled.h4`
  font-weight: 200;
  font-size: 45px;
  line-height: 1.2;
`

const SecondProjectTitle = styled.h3`
  font-weight: 800;
  font-size: 45px;
  line-height: 1.2;
`
const DescriptionWrapper = styled.div`
  max-width: 433px;
  padding: 132px 0 100px;
  line-height: 1.5;
`

const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 40px;
`

const Link = styled.a`

`

