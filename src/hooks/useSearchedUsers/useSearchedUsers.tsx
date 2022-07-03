import { useQuery, UseQueryResult } from 'react-query';
import { REST_API_URL, USER_SEARCHER_PATH, USERS_PATH } from 'constants/restApiPaths';
import { UserDto, UsersSearcherDto } from 'types';
import { GITHUB_REST_API_HEADERS } from 'constants/headers';

export type SearchedUser = {
  type: 'user';
  id: number;
  login: string;
  name: string;
  description?: string;
  location?: string;
  avatar: string;
};

export type UseSearchedUsers = {
  totalSearchedUsersNumber: number;
  searchedUsers: SearchedUser[];
};

export const useSearchedUsers = (searchedText?: string): UseQueryResult<UseSearchedUsers> =>
  useQuery([`useSearchedUsers`, searchedText], async (): Promise<UseSearchedUsers> => {
    if (!searchedText) {
      return { totalSearchedUsersNumber: 0, searchedUsers: [] };
    }

    const searchedUsersResponse = await fetch(
      `${REST_API_URL}${USER_SEARCHER_PATH}?q=${searchedText}&per_page=5`,
      GITHUB_REST_API_HEADERS,
    );
    if (!searchedUsersResponse.ok) {
      await Promise.reject();
    }
    const searchedUsersDto: UsersSearcherDto = await searchedUsersResponse.json();

    const usersDetails: SearchedUser[] = await Promise.all(
      searchedUsersDto.items.map(async (user) => {
        const userResponse = await fetch(`${REST_API_URL}${USERS_PATH}/${user.login}`, GITHUB_REST_API_HEADERS);

        if (!userResponse.ok) {
          await Promise.reject();
        }

        const userDto: UserDto = await userResponse.json();

        return {
          type: 'user',
          id: userDto.id,
          login: userDto.login,
          name: userDto.name,
          description: userDto.bio || undefined,
          location: userDto.location || undefined,
          avatar: userDto.avatar_url,
        };
      }),
    );

    return { totalSearchedUsersNumber: searchedUsersDto.total_count, searchedUsers: usersDetails };
  });
