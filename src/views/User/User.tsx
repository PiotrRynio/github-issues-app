import { useGithubUser } from '../../hooks/useUser';

export const User = () => {
  const { data } = useGithubUser('defunkt');
  console.log(data);
  return <div>User</div>;
};
