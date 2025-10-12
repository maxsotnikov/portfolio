import styled from "styled-components";

type ProjectProps = {
  src: string;
  title: string;
  projectTitle: string;
  description: string;

}

export const Project = (props: ProjectProps) => {
  return (
    <StyledProject>
      <Image src={props.src} alt="" />
      <TitleWrapper>
        <Title>{props.title}</Title>
        <ProjectTitle>{props.projectTitle}</ProjectTitle>
        <Description>{props.description}</Description>
        <Link href={'#'}>View More</Link>
      </TitleWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  
`

const Image = styled.img`

`

const TitleWrapper = styled.div`

`

const Title = styled.span`

`

const ProjectTitle = styled.h3`

`

const Description = styled.p`

`

const Link = styled.a`

`

