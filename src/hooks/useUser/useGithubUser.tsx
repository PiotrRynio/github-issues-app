import { useQuery } from 'react-query';
import { REST_API_URL, USERS_PATH } from 'constants/restApiPaths';
import { UserDto } from 'types/dtos';

export const useGithubUser = (githubUserLogin: string) =>
  useQuery([`useUser-${githubUserLogin}`], async () => {
    const userResponse = await fetch(`${REST_API_URL}${USERS_PATH}/${githubUserLogin}`);
    const userData: UserDto = await userResponse.json();

    return { data: userData };
  });
