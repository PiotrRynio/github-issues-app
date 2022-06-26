import logo from 'assets/images/logo/logo.svg';
import { LogoImage } from './Logo.styles';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to={'/'}>
      <LogoImage src={logo} alt={'github logo'} />
    </Link>
  );
};
