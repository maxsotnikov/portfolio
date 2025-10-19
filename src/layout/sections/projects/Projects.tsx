import styled from "styled-components";
import {SectionTitle} from "./SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Project} from "./project/Project.tsx";
import MentalHealth from '../../../assets/images/project1.webp'
import FashionShow from "../../../assets/images/project2.webp"
import Barbeque from '../../../assets/images/project3.webp'
import {Container} from "../../../components/Container.ts";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>My<br/> projects</SectionTitle>
        <FlexWrapper direction="column">
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
                   description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
          />
        </FlexWrapper>
      </Container>

    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  padding: 170px 0;
`