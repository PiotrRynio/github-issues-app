import { useMatch } from 'react-router-dom';
import { useGithubUser } from 'hooks/useUser';
import { StarIcon, StatisticsLabel, StatisticsLabelContainer, Typography, UsersIcon } from 'components';
import { Avatar, TitlesContainer, Wrapper } from './User.styles';

export const User = () => {
  const githubUserLogin = useMatch('/users/:githubUserLogin')?.params.githubUserLogin;

  const { data, isLoading, isError } = useGithubUser(githubUserLogin);

  if (isLoading) {
    return (
      <Wrapper>
        <Typography variant="body1"> Loading...</Typography>
      </Wrapper>
    );
  }

  if (isError || !data) {
    return (
      <Wrapper>
        <Typography variant="body1"> Error...</Typography>
      </Wrapper>
    );
  }

  const { avatar, login, name, followersNumber, followingNumber, starsNumber } = data;

  return (
    <Wrapper>
      <Avatar src={avatar} alt={`avatar of ${name} user`} />
      <TitlesContainer>
        <Typography variant="title">{name}</Typography>
        <Typography variant="subtitle">{login}</Typography>
      </TitlesContainer>
      <StatisticsLabelContainer isLongerGap>
        <StatisticsLabel>
          <UsersIcon ariaLabel="followers" typographyVariant="small" />
          <Typography variant="small">{followersNumber} </Typography>
          <Typography variant="small"> Followers</Typography>
        </StatisticsLabel>

        <StatisticsLabel>
          <Typography variant="small">{followingNumber} </Typography>
          <Typography variant="small"> Following</Typography>
        </StatisticsLabel>

        <StatisticsLabel>
          <StarIcon ariaLabel="star" typographyVariant="small" />
          <Typography variant="small">{starsNumber} </Typography>
        </StatisticsLabel>
      </StatisticsLabelContainer>
    </Wrapper>
  );
};
