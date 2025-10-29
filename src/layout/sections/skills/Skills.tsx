import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <SkillWrapper>
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
      </SkillWrapper>
     </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 100px 50px 145px 50px;
  
  @media ${theme.media.tablet} {
    padding: 40px 15px;
  }
`

const SkillWrapper = styled.div`
  max-width: 2200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 60px;
  column-gap: 20px;
  
  @media ${theme.media.desktop1} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 40px;
  }
`