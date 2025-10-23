import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {MobileSocialMedia} from "./MobileSocialMedia.tsx";

export const MobileMenu = (props: { navigationItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={false}>
        <Menu>
          {props.navigationItems.map((item) => {
            return (
              <li>
                <Link href="">{item}</Link>
              </li>
            )
          })}
        </Menu>
        <MobileSocialMedia/>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none ;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  //top: 34px;
  z-index: 100;

  span {
    display: block;
    width: 18px;
    height: 1px;
    background-color: #292D32;
    border-radius: 1px;
    position: absolute;

  ${(props) => props.isOpen && css<{isOpen: boolean}>`
    background-color: rgba(255, 255, 255, 0);
  `}

  &::before {
    content: "";
    display: block;
    width: 18px;
    height: 1px;
    background-color: #292D32;
    border-radius: 1px;
    position: absolute;
    transform: translateY(-5px);
    
    ${(props) => props.isOpen && css<{isOpen: boolean}>`
    transform: rotate(-45deg) translateY(0);
  `}
  }
    
  &::after {
    content: "";
    display: block;
    width: 18px;
    height: 1px;
    background-color: #292D32;
    border-radius: 1px;
    position: absolute;
    transform: translateY(5px);
      
    ${(props) => props.isOpen && css<{isOpen: boolean}>`
      transform: rotate(45deg) translateY(0);
  `}
  } 
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 10;
  background-color: ${theme.colors.oddBg};
  display: none;

  ${(props) => props.isOpen && css<{ isOpen: boolean }>`
    padding: 55px 25px 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  `}
`

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  li {
    width: 100%;
    border-bottom: #828282 solid 1px;
    position: relative;
    z-index: 100;
  }
`

const Link = styled.a`
  font-family: "Epilogue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  padding: 10px 10px;
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: ${theme.colors.titleFont};
    color: ${theme.colors.evenFont};
  }
`