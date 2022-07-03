import { renderHook } from 'test-utils';
import { SearchedRepository, UseSearchedRepositories, useSearchedRepositories } from './useSearchedRepositories';
import { getRepositoriesSearcherWillReturn } from 'mocks/msw/rest-api/searcherRequests/mockEndpoints/repositoriesSearcherMockEndpoints';
import { repositoriesSearcherResponse } from 'mocks/msw/rest-api/searcherRequests/responses/repositoriesSearcherResponse';

describe('Hook useSearchedRepositories', () => {
  const searchedText = 'defunkt';
  const correctTotalSearchedRepository = 76;
  const correctSearchedRepository: SearchedRepository = {
    type: 'repository',
    id: 91988,
    name: 'defunkt/defunkt.github.com',
    description: 'My GitHub Page',
    starsNumber: 75,
    programmingLanguage: 'TypeScript',
    license: 'MIT License',
    openedIssuesNumber: 4,
    lastUpdateDate: new Date('2022-06-30T10:27:50Z'),
  };

  it(`should render hook`, async () => {
    // given
    getRepositoriesSearcherWillReturn(repositoriesSearcherResponse);

    // when
    renderHook(() => useSearchedRepositories(searchedText));
  });

  it(`should start loading, if you call hook`, async () => {
    // given
    getRepositoriesSearcherWillReturn(repositoriesSearcherResponse);

    // when
    const { result } = renderHook(() => useSearchedRepositories(searchedText));

    // then
    expect(result.current.isLoading).toBe(true);
  });

  it('should be fetching data wih success, if you call hook', async () => {
    // given
    getRepositoriesSearcherWillReturn(repositoriesSearcherResponse);

    // when
    const { result, waitFor } = await renderHook(() => useSearchedRepositories(searchedText));
    await waitFor(() => result.current.isSuccess);

    // then
    const { error, isLoading, isLoadingError, isSuccess } = result.current;
    expect(isLoading).toBe(false);
    expect(isLoadingError).toBe(false);
    expect(error).toBe(null);
    expect(isSuccess).toBe(true);
    expect(result.current.isSuccess).toBe(true);
  });

  test('should return correct data, if it finish with success', async () => {
    // given
    getRepositoriesSearcherWillReturn(repositoriesSearcherResponse);
    const { result, waitFor } = await renderHook(() => useSearchedRepositories(searchedText));

    // when
    await waitFor(() => result.current.isSuccess);

    // then
    const { totalSearchedRepositoriesNumber, searchedRepositories } = result.current.data as UseSearchedRepositories;
    expect(totalSearchedRepositoriesNumber).toStrictEqual(correctTotalSearchedRepository);
    expect(searchedRepositories[0]).toStrictEqual(correctSearchedRepository);
  });
});
