import { ReactNode } from 'react';
import { StyledLink } from './Link.styles';

export type LinkProps = {
  children: ReactNode;
  to: string;
};

export const Link = ({ children, to }: LinkProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
