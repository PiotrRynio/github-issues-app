import { Typography } from 'components';
import { Wrapper } from './Home.styles';

export const Home = () => {
  return (
    <Wrapper>
      <Typography variant="title">Hi Programmer!</Typography>
      <Typography variant="body1">You will find a searcher at the top of the page!</Typography>
      <Typography variant="body1">Use it and find repositories or users.</Typography>
    </Wrapper>
  );
};
