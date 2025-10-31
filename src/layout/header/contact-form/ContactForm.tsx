import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {ElementRef, useRef, useState} from "react";
import {Button} from "../../../components/Button.ts";
import {font} from "../../../styles/Common.ts";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formIsOpen, setformIsOpen] = useState(false)
  const onBtnClick = () => {setformIsOpen(!formIsOpen)}
  const form = useRef<ElementRef<'form'>>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_k05yrpx', 'template_ft8t548', form.current, {
        publicKey: 'Y3ckFrswkXhxC46dT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };
  return (
    <>
      <Button isOpen={formIsOpen} onClick={onBtnClick}>Let's Talk</Button>
      <FormContainer isOpen={formIsOpen} onClick={ () => {(setformIsOpen(false))}}>
        <StyledForm isOpen={formIsOpen} onClick={(e) => e.stopPropagation()}>
          <ContactFormPopup ref={form} onSubmit={sendEmail}>
            <Field required placeholder={'What is your name?'} name={'user_name'}/>
            <Field required placeholder={'Your email'} name={'email'}/>
            <Field required placeholder={'Tell me about your project'} name={'message'} as={'textarea'}/>
            <Button type={'submit'}>Send</Button>
          </ContactFormPopup>
        </StyledForm>
      </FormContainer>
    </>
  )
}

const FormContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  transition: 0.8s ease-in-out;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  opacity: 0;

  ${(props) => props.isOpen && css<{ isOpen: boolean }>`
    pointer-events: all;
    opacity: 1;
  `}
  ${Button} {
    margin-top: 40px;
    background-color: ${theme.colors.evenFont};
    color: ${theme.colors.oddFont};

    &:active {
      background-color: ${theme.colors.oddFont};
      color: ${theme.colors.evenFont};
    }
  }
`

const StyledForm = styled.div<{ isOpen: boolean }>`
  max-width: 500px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10000;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: 1s ease-in-out;
  padding: 50px 25px 50px;
  background-color: ${theme.colors.evenBg};

  ${(props) => props.isOpen && css<{ isOpen: boolean }>`
    opacity: 1;
  `}
  
  @media ${theme.media.mobile} {
    width: 90%;  
}
`

const ContactFormPopup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  textarea {
    resize: none;
    height: 100px;
  }
`

const Field = styled.input`
  padding: 7px 15px;
  width: 100%;
  background-color: #3e3a3a;
  ${font({weight: 400, color: theme.colors.evenFont, Fmax: 16, Fmin: 16})}
`