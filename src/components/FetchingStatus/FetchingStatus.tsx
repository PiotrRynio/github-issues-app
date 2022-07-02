import { Typography } from '../Typography';
import { Wrapper } from './FetchingStatus.styles';

export type FetchingStatusProps = {
  status: 'error' | 'loading' | 'noResults';
};

export const FetchingStatus = ({ status }: FetchingStatusProps) => {
  if (status === 'error') {
    return (
      <Wrapper role="status">
        <Typography variant="subtitle">Api error...</Typography>
        <Typography variant="body1">Try again!</Typography>
      </Wrapper>
    );
  }
  if (status === 'loading') {
    return (
      <Wrapper role="status">
        <Typography variant="subtitle">Loading...</Typography>
      </Wrapper>
    );
  }
  if (status === 'noResults') {
    return (
      <Wrapper role="status">
        <Typography variant="subtitle">No results!</Typography>
        <Typography variant="body1">Search something other</Typography>
      </Wrapper>
    );
  }
  return null;
};
