import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";

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
  //width: 30%;
  flex: 1 1 30%;
  min-width: 440px;
`

const NumberWrapper = styled.div`
  width: 90px;
  flex-shrink: 0;
`

const SkillNumber = styled.span`
  display: block;
  font-weight: 100;
  font-size: 70px;
  margin-top: 17px;
`

const SkillTitle = styled.h3`
  font-weight: 300;
  font-size: 30px;  
`

const SkillDescription = styled.p`
  font-weight: 200;
  font-size: 18px;
  line-height: 1.2;
`