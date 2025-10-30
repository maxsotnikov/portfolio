import styled from "styled-components";
import {SocialIcons} from "../icons/SocialIcons.tsx";
import {FlexWrapper} from "../FlexWrapper.ts";
import {theme} from "../../styles/Theme.ts";

export const SocialLinks = () => {
  return (
    <FlexWrapper justify="space-between" >
      <SocialList>
        <SocialItem>
          <SocialLink href={'https://facebook.com/'} target="_blank" rel="noopener noreferrer">
            <SocialIcons iconId={'facebook'} viewbox={'0 0 12 24'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href={'https://www.instagram.com/'} target="_blank" rel="noopener noreferrer">
            <SocialIcons iconId={'instagram'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href={'https://x.com/'} target="_blank" rel="noopener noreferrer">
            <SocialIcons iconId={'x'} viewbox={'2 3 24 24'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href={'https://www.linkedin.com/'} target="_blank" rel="noopener noreferrer">
            <SocialIcons iconId={'linkedIn'}/>
          </SocialLink>
        </SocialItem>
      </SocialList>
    </FlexWrapper>
  )
}

const SocialList = styled.ul`
  display: flex;
  gap: 12px;
  height: 24px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  display: inline-block;
  
  &:hover {
    transform: translateY(-5px);
    transition: ${theme.animations.transition};

    @media ${theme.media.tablet} {
      transform: none;
    }
  }
  
  &:active {
    opacity: 0.5;
  }
  
  @media ${theme.media.tablet} {
    transform: none;
  }
`