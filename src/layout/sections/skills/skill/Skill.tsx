import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {theme} from "../../../../styles/Theme.ts";
import {font} from "../../../../styles/Common.ts";

type SkillProps = {
  number: string
  title: string
  text: string
}

export const Skill = (props: SkillProps) => {
  return (
    <StyledSkill>
      <FlexWrapper gap="35px">
        <NumberWrapper>
          <SkillNumber>{props.number}</SkillNumber>
        </NumberWrapper>
        <FlexWrapper direction="column" gap="5px">
          <SkillTitle>{props.title}</SkillTitle>
          <SkillDescription>{props.text}</SkillDescription>
        </FlexWrapper>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 430px;
  flex-grow: 1;
  
  & > ${FlexWrapper} {
    @media ${theme.media.mobile} {
      gap: 25px;
    }
  }
`

const NumberWrapper = styled.div`
  //width: 90px;
  flex-shrink: 1;
  
  // @media ${theme.media.desktop3} {
  //   width: 90px;
  // }
  
  // @media ${theme.media.mobile} {
  //   width: 58px;
  // }
  
  // @media ${theme.media.desktop1} {
  //   max-width: 90px;
  // }
`

const SkillNumber = styled.span`
  display: block;
  margin-top: 17px;
  ${font({weight: 100, color: theme.colors.evenFont, Fmax: 70, Fmin: 45})}
`

const SkillTitle = styled.h3`
  ${font({weight: 300, color: theme.colors.evenFont, Fmax: 30, Fmin: 25})}
`

const SkillDescription = styled.p`
  ${font({weight: 200, color: theme.colors.evenFont, lineHeight: 1.2, Fmax: 18, Fmin: 14})}
`