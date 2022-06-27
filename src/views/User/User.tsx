import { useGithubUser } from '../../hooks/useUser';
import { Typography } from '../../components';

export const User = () => {
  const { data } = useGithubUser('defunkt');

  if (!data) {
    return <div>Loading...</div>;
  }
  const { avatar, login, name, followersNumber, followingNumber, starsNumber } = data;

  return (
    <article>
      <img src={avatar} alt={`avatar of ${name} user`} />
      <Typography variant="title">{name}</Typography>
      <Typography variant="subtitle">{login}</Typography>
      <Typography variant="small">{followersNumber}</Typography>
      <Typography variant="small">{followingNumber}</Typography>
      <Typography variant="small">{starsNumber}</Typography>
    </article>
  );
};
