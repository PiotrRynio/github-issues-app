import logo from 'assets/images/logo/logo.svg';
import { LogoImage } from './Logo.styles';

export const Logo = () => {
  return <LogoImage src={logo} alt={'github logo'} />;
};
