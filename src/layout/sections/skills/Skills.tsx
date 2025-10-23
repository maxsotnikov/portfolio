import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper  gap={'60px'} justify={'space-between'} wrap={'wrap'}>
          <Skill number={'01.'}
                 title={'React'}
                 text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
          />
          <Skill number={'02.'}
                 title={'Styled Components'}
                 text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
          />
          <Skill number={'03.'}
                 title={'Figma'}
                 text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
          />
          <Skill number={'04.'}
                 title={'HTML'}
                 text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
          />
          <Skill number={'05.'}
                 title={'CSS'}
                 text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
          />
          <Skill number={'06.'}
                 title={'Design'}
                 text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
          />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 100px 50px 145px 50px;
`