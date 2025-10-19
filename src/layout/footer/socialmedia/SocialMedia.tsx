import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import styled from "styled-components";
import {Icon} from "../../../components/Icon.tsx";

export const SocialMedia = () => {
  return (
    <FlexWrapper justify="space-between">
      <Copyright>2022 Relume. All right reserved.</Copyright>
      <SocialList>
        <SocialItem>
          <SocialLink href={'#'}>
            <Icon iconId={'facebook'}/>
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

const Copyright = styled.small`
`

const SocialList = styled.ul`
  display: flex;
  gap: 12px;
  
`

const SocialItem = styled.li`
 
`

const SocialLink = styled.a`

`

