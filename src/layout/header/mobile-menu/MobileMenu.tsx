import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {MobileSocialMedia} from "./MobileSocialMedia.tsx";
import {useState} from "react";

type MobileMenuItemProps = {
  title: string;
  href: string;
}

export const MobileMenu = (props: { menuItems: Array<MobileMenuItemProps> }) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {(setmenuIsOpen(false))}}>
        <Menu>
          {props.menuItems.map((item) => {
            return (
              <li>
                <MenuLink href={`#${item.href}`}>{item.title}</MenuLink>
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
  position: fixed;
  width: 24px;
  height: 24px;
  top: 13px;
  right: 22px;
  z-index: 100;

  span {
    width: 18px;
    height: 1px;
    background-color: #292D32;
    border-radius: 1px;
    position: absolute;
    transform: translateY(-50%);
    transition: ${theme.animations.transitionMobileBtn};

  ${(props) => props.isOpen && css<{isOpen: boolean}>`
    background-color: rgba(255, 255, 255, 0);
  `}

  &::before {
    content: "";
    width: 18px;
    height: 1px;
    background-color: #292D32;
    border-radius: 1px;
    position: absolute;
    transform: translateY(-5px);
    inset: 0;
    transition: ${theme.animations.transitionMobileBtn};
    
    ${(props) => props.isOpen && css<{isOpen: boolean}>`
    transform: rotate(-45deg) translateY(0);
  `}
  }
    
  &::after {
    content: "";
    width: 18px;
    height: 1px;
    background-color: #292D32;
    border-radius: 1px;
    position: absolute;
    transform: translateY(5px);
    inset: 0;
    transition: ${theme.animations.transitionMobileBtn};
      
    ${(props) => props.isOpen && css<{isOpen: boolean}>`
      transform: rotate(45deg) translateY(0);
  `}
  } 
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  //display: none;
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: ${theme.colors.oddBg};
  display: flex;
  flex-direction: column;
  gap: 25px;
  transform: translatex(100%);
  transition: 1s ease-in-out;
  padding: 55px 25px 30px;

  ${(props) => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateX(0);
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

const MenuLink = styled.a`
  font-family: "Epilogue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  padding: 10px 10px;
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  transition: ${theme.animations.transition};
  
  &:hover {
    background-color: ${theme.colors.titleFont};
    color: ${theme.colors.evenFont};
  }
`