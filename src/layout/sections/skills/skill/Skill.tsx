import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {font} from "../../../../styles/Common.ts";

type SkillProps = {
  title: string
  text: string
}

export const Skill = (props: SkillProps) => {
  return (
    <StyledSkill>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillDescription>{props.text}</SkillDescription>
    </StyledSkill>
  );
};

const StyledSkill = styled.li`
  counter-increment: skills 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap:5px;
  padding-left: 110px;
    
  &::after {
    content: counter(skills, decimal-leading-zero) ".";
    position: absolute;
    left: 0;
    top: 10px;
  }

  @media ${theme.media.desktop3} {
    padding-left: 20%;
  }

  @media ${theme.media.desktop1} {
    padding-left: 100px;
  }

  @media ${theme.media.tablet} {
    padding-left: 90px;
  }
  
  @media ${theme.media.mobile} {
    padding-left: 80px;
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