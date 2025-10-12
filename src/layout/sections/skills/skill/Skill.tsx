import styled from "styled-components";

type SkillProps = {
  number: string
  title: string
  text: string
}

export const Skill = (props: SkillProps) => {
  return (
    <StyledSkill>
      <SkillNumber>{props.number}</SkillNumber>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.text}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  color: #fff;
  margin: 10px;
`

const SkillNumber = styled.span`
  
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`
  
`