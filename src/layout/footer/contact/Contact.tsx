import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Navigation} from "../../../components/navigation/Navigation.tsx";
import {theme} from "../../../styles/Theme.ts";

const items = ['Projects', 'About', 'Digital Assets']

export const Contact = () => {
  return (
    <StyledContact>
      <NavigationWrapper>
        <Logo/>
        <Navigation navigationItems={items}/>
      </NavigationWrapper>
      <SubscribeWrapper>
        <TitleForm>Subscribe to my emailing list</TitleForm>
        <FlexWrapper gap={'16px'} wrap={'wrap'}>
          <Field placeholder={'Enter your email'}/>
          <Sybscribe type={'submit'}>Subscribe</Sybscribe>
        </FlexWrapper>
        <PrivacyPolicy>By subscribing you agree to with our <a href={'#'}>Privacy Policy</a></PrivacyPolicy>
      </SubscribeWrapper>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 130px;
  
  @media ${theme.media.tablet} {
    margin-bottom: 45px;
  }
  
  @media ${theme.media.mobile} {
    display: block;
  }
  
  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.oddFont};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -65px;
    
    @media ${theme.media.tablet} {
      bottom: -22px;
    }
  }  
`

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media ${theme.media.tablet} {
    gap: 10px;
  }
`

const SubscribeWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media ${theme.media.tablet} {
    padding: 26px 0 22px 20px;
  }
`

const TitleForm = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
`

const Field = styled.input`
  border: 1px solid #000;
  padding: 12px;
  
  @media ${theme.media.mobile} {
    width: 100%;
  }
`

const Sybscribe = styled.button`
  border: 1px solid #000;
  padding: 12px 24px;
  
  &:hover {
    background-color: ${theme.colors.titleFont};
    color: ${theme.colors.evenFont};
  }
`

const PrivacyPolicy = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  
  a:link {
    text-decoration: underline;
  }
`