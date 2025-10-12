import styled from "styled-components";
import {SectionTitle} from "./SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import MentalHealth from '../../../assets/images/project1.webp'
import FashionShow from "../../../assets/images/project2.webp"
import Barbeque from '../../../assets/images/project3.webp'

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>My projects</SectionTitle>
      <FlexWrapper direction="column">
        <Project src={MentalHealth}
                 title="Mental Health"
                 projectTitle={'A Case Study_ Find Peace in Meditation'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
        />
        <Project src={FashionShow}
                 title="Fashion Show"
                 projectTitle={'A Case Study_ Enjoy Fashion Shows From Home'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
        />
        <Project src={Barbeque}
                 title="Barbeque"
                 projectTitle={'Branding_ Chicken Barbeque Never Goes Wrong'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #fff;
`