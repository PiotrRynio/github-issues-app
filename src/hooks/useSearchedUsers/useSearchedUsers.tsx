import { useQuery, UseQueryResult } from 'react-query';

type UseSearchedUsers = {};

export const useSearchedUsers = (searchedText?: string): UseQueryResult<UseSearchedUsers> =>
  useQuery([`useRepositories-${searchedText}`], async (): Promise<UseSearchedUsers> => {
    return {};
  });
