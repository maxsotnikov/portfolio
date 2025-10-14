import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Logo} from "../../../../components/logo/Logo.tsx";
import {Navigation} from "../../../../components/navigation/Navigation.tsx";

const items = ['Projects', 'About', 'Digital Assets']

export const Contact = () => {
  return (
    <StyledContact>
      <FlexWrapper direction="column">
        <Logo/>
        <Navigation navigationItems={items}/>
      </FlexWrapper>
      <StyledForm>
        <TitleForm>Subscribe to my emailing list</TitleForm>
        <FlexWrapper gap={'16px'}>
          <Field placeholder={'Enter your email'}/>
          <Sybscribe type={'submit'}>Subscribe</Sybscribe>
        </FlexWrapper>
        <PrivacyPolicy>By subscribing you agree to with our <a href={'#'}>Privacy Policy</a></PrivacyPolicy>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`

const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const TitleForm = styled.span`
  color: #000;
`

const Field = styled.input`
  border: 1px solid #000;
  padding: 12px;
`

const Sybscribe = styled.button`
  border: 1px solid #000;
  padding: 12px 24px;
`

const PrivacyPolicy = styled.span`
  //a:hover {
  //  text-decoration: none;
  //}
  
  a:link {
    text-decoration: underline;
  }
`