import LogoImg from '../../assets/images/logo.webp'
import {StyledLogo} from "./StyledLogo.ts";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
  return (
    <a onClick={() => {scroll.scrollTo(0, 0)}}>
      <StyledLogo src={LogoImg} alt="logo"/>
    </a>
  );
};
