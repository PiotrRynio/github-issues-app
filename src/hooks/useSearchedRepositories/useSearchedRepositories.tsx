import { useQuery, UseQueryResult } from 'react-query';

export type SearchedRepository = {
  id: number;
  login: string;
  name: string;
  description?: string;
  location?: string;
};

export type UseSearchedRepositories = {
  totalSearchedRepositoriesNumber: number;
  searchedRepositories: SearchedRepository[];
};
export const useSearchedRepositories = (searchedText?: string): UseQueryResult<UseSearchedRepositories> =>
  useQuery([`useSearchedRepositories-${searchedText}`], async (): Promise<UseSearchedRepositories> => {
    return {} as UseSearchedRepositories;
  });
