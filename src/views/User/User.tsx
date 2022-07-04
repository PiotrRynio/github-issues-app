import { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { usePageTitle, useGithubUser } from 'hooks';
import { Avatar, StarIcon, StatisticsLabel, StatisticsLabelContainer, Typography, UsersIcon } from 'components';
import { APP_NAME } from 'constants/names';
import { TitlesContainer, Wrapper } from './User.styles';

export const User = () => {
  const githubUserLogin = useMatch('/users/:githubUserLogin')?.params.githubUserLogin;

  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(`${githubUserLogin} | ${APP_NAME}`);
  }, [githubUserLogin, setPageTitle]);

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
      <Avatar image={avatar} name={name} isLarge />
      <TitlesContainer>
        <Typography variant="title">{name}</Typography>
        <Typography variant="subtitle">{login}</Typography>
      </TitlesContainer>
      <StatisticsLabelContainer isLongerGap>
        <StatisticsLabel>
          <UsersIcon ariaLabel="followers" height={16} width={16} />
          <Typography variant="small">{followersNumber} </Typography>
          <Typography variant="small"> Followers</Typography>
        </StatisticsLabel>

        <StatisticsLabel>
          <Typography variant="small">{followingNumber} </Typography>
          <Typography variant="small"> Following</Typography>
        </StatisticsLabel>

        <StatisticsLabel>
          <StarIcon ariaLabel="star" height={15} width={15} />
          <Typography variant="small">{starsNumber} </Typography>
        </StatisticsLabel>
      </StatisticsLabelContainer>
    </Wrapper>
  );
};
