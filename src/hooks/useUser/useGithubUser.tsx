import { useQuery, UseQueryResult } from 'react-query';
import parseLinkHeader from 'parse-link-header';
import { REST_API_URL, USERS_PATH } from 'constants/restApiPaths';
import { UserDto } from 'types/dtos';

type UseGithubUser = {
  id: string;
  login: string;
  name: string;
  followersNumber: number;
  followingNumber: number;
  starsNumber: number;
  avatar: string;
};

export const useGithubUser = (githubUserLogin: string): UseQueryResult<UseGithubUser> =>
  useQuery([`useUser-${githubUserLogin}`], async (): Promise<UseGithubUser> => {
    const userResponse = await fetch(`${REST_API_URL}${USERS_PATH}/${githubUserLogin}`);
    const userDto: UserDto = await userResponse.json();

    const starsResponse = await fetch(`https://api.github.com/users/${githubUserLogin}/starred?per_page=1`);
    console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
    const linkHeader = starsResponse.headers.get('Link');
    const parsedLinkHeader = parseLinkHeader(linkHeader);
    const starsNumber = Number(parsedLinkHeader?.last.page);

    const userData = {
      id: String(userDto.id),
      login: userDto.login,
      name: userDto.name,
      followersNumber: userDto.followers,
      followingNumber: userDto.following,
      starsNumber,
      avatar: userDto.avatar_url,
    };

    return { ...userData };
  });
