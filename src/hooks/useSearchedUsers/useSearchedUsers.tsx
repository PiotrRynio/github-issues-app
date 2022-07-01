import { useQuery, UseQueryResult } from 'react-query';
import { REST_API_URL, USER_SEARCHER_PATH, USERS_PATH } from 'constants/restApiPaths';
import { UserDto, UsersSearcherDto } from 'types';

export type SearchedUser = {
  id: number;
  login: string;
  name: string;
  description?: string;
  location?: string;
};

export type UseSearchedUsers = {
  totalUsersNumber: number;
  users: SearchedUser[];
};

export const useSearchedUsers = (searchedText?: string): UseQueryResult<UseSearchedUsers> =>
  useQuery([`useSearchedUsers-${searchedText}`], async (): Promise<UseSearchedUsers> => {
    if (!searchedText) {
      await Promise.reject();
    }

    const searchedUsersResponse = await fetch(`${REST_API_URL}${USER_SEARCHER_PATH}/${searchedText}`);
    if (!searchedUsersResponse.ok) {
      await Promise.reject();
    }
    const searchedUsersDto: UsersSearcherDto = await searchedUsersResponse.json();

    console.log('searchedUsersDto', searchedUsersDto);

    const usersDetails: SearchedUser[] = await Promise.all(
      searchedUsersDto.items.map(async (user) => {
        const userResponse = await fetch(`${REST_API_URL}${USERS_PATH}/${user.login}`);
        if (!userResponse.ok) {
          await Promise.reject();
        }
        const userDto: UserDto = await userResponse.json();

        return {
          id: userDto.id,
          login: userDto.login,
          name: userDto.name,
          description: userDto.bio || undefined,
          location: userDto.location || undefined,
        };
      }),
    );

    return { totalUsersNumber: searchedUsersDto.total_count, users: usersDetails };
  });
