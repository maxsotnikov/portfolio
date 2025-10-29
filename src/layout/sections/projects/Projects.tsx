import styled from "styled-components";
import {SectionTitle} from "./SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Project} from "./project/Project.tsx";
import MentalHealth from '../../../assets/images/project1.webp'
import FashionShow from "../../../assets/images/project2.webp"
import Barbeque from '../../../assets/images/project3.webp'
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Projects = () => {
  return (
    <StyledProjects id={'projects'}>
      <Container>
        <SectionTitle>My<br/> projects</SectionTitle>
        <FlexWrapper direction="column" gap='80px'>
          <Project img={MentalHealth}
                   title="Mental Health"
                   firstProjectTitle={'A Case Study_'}
                   secondProjectTitle={'Find Peace in Meditation'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
          />
          <Project img={FashionShow}
                   title="Fashion Show"
                   firstProjectTitle={'A Case Study_'}
                   secondProjectTitle={'Enjoy Fashion Shows From Home'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
          />
          <Project img={Barbeque}
                   title="Barbeque"
                   firstProjectTitle={'Branding_'}
                   secondProjectTitle={'Chicken Barbeque Never Goes Wrong'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding: 170px 0;

  @media ${theme.media.tablet} {
    padding: 70px 0;
    
    ${FlexWrapper} {
      gap: 60px;
    }
  }
`