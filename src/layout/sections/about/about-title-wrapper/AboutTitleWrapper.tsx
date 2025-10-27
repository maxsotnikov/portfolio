import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {font} from "../../../../styles/Common.ts";
import {theme} from "../../../../styles/Theme.ts";

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
  color: ${theme.colors.evenFont};
`

const AboutTitle = styled.h3`
  max-width: 422px;
  text-transform: uppercase;
  ${font({weight: 200, color: theme.colors.evenFont, lineHeight: 1.2, Fmax: 48, Fmin: 43})}
`