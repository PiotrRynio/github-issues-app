import { useQuery, UseQueryResult } from 'react-query';
import { RepositoriesSearcherDto } from 'types';
import { REPOSITORIES_SEARCHER_PATH, REST_API_URL } from 'constants/restApiPaths';
import { GITHUB_REST_API_HEADERS } from 'constants/headers';

export type SearchedRepository = {
  type: 'repository';
  id: number;
  name: string;
  description?: string;
  starsNumber: number;
  programmingLanguage?: string;
  license?: string;
  openedIssuesNumber: number;
  lastUpdateDate: Date;
};

export type UseSearchedRepositories = {
  totalSearchedRepositoriesNumber: number;
  searchedRepositories: SearchedRepository[];
};
export const useSearchedRepositories = (searchedText?: string): UseQueryResult<UseSearchedRepositories> =>
  useQuery([`useSearchedRepositories`, searchedText], async (): Promise<UseSearchedRepositories> => {
    if (!searchedText) {
      return { totalSearchedRepositoriesNumber: 0, searchedRepositories: [] };
    }

    const searchedRepositoriesResponse = await fetch(
      `${REST_API_URL}${REPOSITORIES_SEARCHER_PATH}?q=${searchedText}&per_page=5`,
      GITHUB_REST_API_HEADERS,
    );
    if (!searchedRepositoriesResponse.ok) {
      await Promise.reject();
    }

    const searchedRepositoriesDto: RepositoriesSearcherDto = await searchedRepositoriesResponse.json();

    const repositoriesDetails: SearchedRepository[] = searchedRepositoriesDto.items.map((searchedRepository) => ({
      type: 'repository',
      id: searchedRepository.id,
      name: searchedRepository.full_name,
      description: searchedRepository.description || undefined,
      starsNumber: searchedRepository.stargazers_count,
      programmingLanguage: searchedRepository.language || undefined,
      license: searchedRepository.license?.name || undefined,
      openedIssuesNumber: searchedRepository.open_issues_count,
      lastUpdateDate: new Date(searchedRepository.updated_at),
    }));

    return {
      totalSearchedRepositoriesNumber: searchedRepositoriesDto.total_count,
      searchedRepositories: repositoriesDetails,
    } as UseSearchedRepositories;
  });
