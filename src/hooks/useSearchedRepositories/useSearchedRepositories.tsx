import { useQuery, UseQueryResult } from 'react-query';

type UseSearchedRepositories = {};

export const useSearchedRepositories = (searchedText?: string): UseQueryResult<UseSearchedRepositories> =>
  useQuery([`useSearchedRepositories-${searchedText}`], async (): Promise<UseSearchedRepositories> => {
    return {};
  });
