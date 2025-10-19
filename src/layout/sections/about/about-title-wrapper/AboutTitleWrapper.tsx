import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";

type AboutTitleWrapperProps = {
  title: string;
}

export const AboutTitleWrapper = (props: AboutTitleWrapperProps) => {
  return (
    <FlexWrapper direction="column" gap={'15px'}>
      <AboutMe>About Me</AboutMe>
      <AboutTitle>{props.title}</AboutTitle>
    </FlexWrapper>
  );
};

const AboutMe = styled.span`
  font-weight: 900;
  font-size: 16px;
  line-height: 1.5;
`

const AboutTitle = styled.h3`
  max-width: 422px;
  font-weight: 254;
  font-size: 48px;
  line-height: 1.2;
  text-transform: uppercase;
`