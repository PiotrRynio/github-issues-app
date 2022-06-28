import { useGithubUser } from 'hooks/useUser';
import { Typography } from 'components';
import { Avatar, StatsContainer, TitlesContainer, Wrapper } from './User.styles';

export const User = () => {
  const { data } = useGithubUser('defunkt');

  if (!data) {
    return (
      <Wrapper>
        <Typography variant="body1"> Loading...</Typography>
      </Wrapper>
    );
  }

  const { avatar, login, name, followersNumber, followingNumber, starsNumber } = data;

  return (
    <Wrapper>
      <Avatar src={avatar} alt={`avatar of ${name} user`} />
      <TitlesContainer>
        <Typography variant="title">{name}</Typography>
        <Typography variant="subtitle">{login}</Typography>{' '}
      </TitlesContainer>
      <StatsContainer>
        <Typography variant="small">{followersNumber}</Typography>
        <Typography variant="small">{followingNumber}</Typography>
        <Typography variant="small">{starsNumber}</Typography>
      </StatsContainer>
    </Wrapper>
  );
};
