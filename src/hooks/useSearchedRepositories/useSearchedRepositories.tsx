import { useQuery, UseQueryResult } from 'react-query';
import { REPOSITORIES_SEARCHER_PATH, REST_API_URL } from 'constants/restApiPaths';
import { RepositoriesSearcherDto } from 'types';

export type SearchedRepository = {
  id: number;
  name: string;
  description?: string;
  starsNumber: number;
  programmingLanguage?: string;
  license?: string;
  openedIssuesNumber: number;
  updated_at: string;
};

export type UseSearchedRepositories = {
  totalSearchedRepositoriesNumber: number;
  searchedRepositories: SearchedRepository[];
};
export const useSearchedRepositories = (searchedText?: string): UseQueryResult<UseSearchedRepositories> =>
  useQuery([`useSearchedRepositories-${searchedText}`], async (): Promise<UseSearchedRepositories> => {
    if (!searchedText) {
      return { totalSearchedRepositoriesNumber: 0, searchedRepositories: [] };
    }

    const searchedRepositoriesResponse = await fetch(`${REST_API_URL}${REPOSITORIES_SEARCHER_PATH}?q=${searchedText}`);
    if (!searchedRepositoriesResponse.ok) {
      await Promise.reject();
    }

    const searchedRepositoriesDto: RepositoriesSearcherDto = await searchedRepositoriesResponse.json();

    const repositoriesDetails: SearchedRepository[] = searchedRepositoriesDto.items.map((searchedRepository) => ({
      id: searchedRepository.id,
      name: searchedRepository.full_name,
      description: searchedRepository.description || undefined,
      starsNumber: searchedRepository.stargazers_count,
      programmingLanguage: searchedRepository.language || undefined,
      license: searchedRepository.license || undefined,
      openedIssuesNumber: searchedRepository.open_issues_count,
      updated_at: searchedRepository.updated_at,
    }));

    return {
      totalSearchedRepositoriesNumber: searchedRepositoriesDto.total_count,
      searchedRepositories: repositoriesDetails,
    } as UseSearchedRepositories;
  });
