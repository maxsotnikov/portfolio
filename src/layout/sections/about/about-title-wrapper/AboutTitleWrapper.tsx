import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type AboutTitleWrapperProps = {
  title: string;
}

export const AboutTitleWrapper = (props: AboutTitleWrapperProps) => {
  return (
    <FlexWrapper direction="column">
      <AboutMe>About Me</AboutMe>
      <AboutTitle>{props.title}</AboutTitle>
    </FlexWrapper>
  );
};

const AboutMe = styled.span`
  color: #f2f2f2;
`

const AboutTitle = styled.h3`
  color: #f2f2f2;
  text-transform: uppercase;
`