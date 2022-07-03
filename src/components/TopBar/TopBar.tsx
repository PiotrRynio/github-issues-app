import { Logo } from 'components';
import { Wrapper } from './TopBar.styles';
import { Searcher } from '../Searcher/Searcher';

export const TopBar = () => {
  return (
    <Wrapper>
      <Logo />
      <Searcher />
    </Wrapper>
  );
};
