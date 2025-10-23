import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import styled from "styled-components";
import {Icon} from "../../../components/Icon.tsx";

export const MobileSocialMedia = () => {
  return (
    <FlexWrapper justify="space-between" >
      <SocialList>
        <SocialItem>
          <SocialLink href={'#'}>
            <Icon iconId={'facebook'} viewbox={'0 0 12 24'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href={'#'}>
            <Icon iconId={'instagram'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href={'#'}>
            <Icon iconId={'twitter'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href={'#'}>
            <Icon iconId={'linkedIn'}/>
          </SocialLink>
        </SocialItem>
      </SocialList>
    </FlexWrapper>
  );
};

const SocialList = styled.ul`
  display: flex;
  gap: 12px;
  
`

const SocialItem = styled.li`
 
`

const SocialLink = styled.a`

`

