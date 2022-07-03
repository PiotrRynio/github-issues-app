import { useQuery, UseQueryResult } from 'react-query';
import parseLinkHeader from 'parse-link-header';
import { REST_API_BASE_URL, USERS_PATH } from 'constants/restApiPaths';
import { UserDto } from 'types/dtos';
import { GITHUB_REST_API_HEADERS } from 'constants/headers';

type UseGithubUser = {
  id: number;
  login: string;
  name: string;
  followersNumber: number;
  followingNumber: number;
  starsNumber: number;
  avatar: string;
};

export const useGithubUser = (githubUserLogin?: string): UseQueryResult<UseGithubUser> =>
  useQuery([`useUser`, githubUserLogin], async (): Promise<UseGithubUser> => {
    if (!githubUserLogin) {
      await Promise.reject();
    }

    const userResponse = await fetch(`${REST_API_BASE_URL}${USERS_PATH}/${githubUserLogin}`, GITHUB_REST_API_HEADERS);
    if (!userResponse.ok) {
      await Promise.reject();
    }
    const userDto: UserDto = await userResponse.json();

    const starsResponse = await fetch(
      `${REST_API_BASE_URL}${USERS_PATH}/${githubUserLogin}/starred?per_page=1`,
      GITHUB_REST_API_HEADERS,
    );
    if (!starsResponse.ok) {
      await Promise.reject();
    }

    const linkHeader = starsResponse.headers.get('Link');
    const parsedLinkHeader = parseLinkHeader(linkHeader);
    const starsNumber = Number(parsedLinkHeader?.last.page);

    const userData: UseGithubUser = {
      id: userDto.id,
      login: userDto.login,
      name: userDto.name,
      followersNumber: userDto.followers,
      followingNumber: userDto.following,
      starsNumber,
      avatar: userDto.avatar_url,
    };

    return { ...userData };
  });
