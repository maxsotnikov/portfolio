import LogoImg from '../../assets/images/logo.webp'
import {StyledLogo} from "./StyledLogo.ts";


export const Logo = () => {
  return (
    <a href=''>
      <StyledLogo src={LogoImg} alt="logo"/>
    </a>
  );
};
