import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {theme} from "../../../../styles/Theme.ts";
import {font} from "../../../../styles/Common.ts";

type SkillProps = {
  title: string
  text: string
}

export const Skill = (props: SkillProps) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" gap="5px">
        <SkillTitle>{props.title}</SkillTitle>
        <SkillDescription>{props.text}</SkillDescription>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.li`
  counter-increment: skills 1;
  position: relative;
  display: flex;
  padding-left: 100px;
    
  &::after {
    content: counter(skills, decimal-leading-zero) ".";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
`

const SkillTitle = styled.h3`
  ${font({weight: 300, color: theme.colors.evenFont, Fmax: 30, Fmin: 25})}
`

const SkillDescription = styled.p`
  ${font({
    weight: 200,
    color: theme.colors.evenFont,
    lineHeight: 1.2,
    Fmax: 18,
    Fmin: 14
  })}
`