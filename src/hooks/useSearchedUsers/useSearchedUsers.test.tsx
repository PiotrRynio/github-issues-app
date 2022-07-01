import { renderHook } from 'test-utils';
import { getUsersSearcherWillReturn } from 'mocks/msw/rest-api/searcherRequests/mockEndpoints/usersSearcherMockEndpoints';
import { usersSearcherResponse } from 'mocks/msw/rest-api/searcherRequests/responses/usersSearcherResponse';
import { SearchedUser, useSearchedUsers } from './useSearchedUsers';

describe('Hook useSearchedUsers', () => {
  const searchedText = 'defunkt';
  const correctTotalUsersNumber = 23;
  const correctSearchedUser: SearchedUser = {
    id: 2,
    login: 'defunkt',
    name: 'Chris Wanstrath',
    description: 'example description',
    location: 'London, England',
  };

  it(`should render hook`, async () => {
    // when
    renderHook(() => useSearchedUsers(searchedText));
  });

  it(`should start loading, if you call hook`, async () => {
    // given
    getUsersSearcherWillReturn(usersSearcherResponse);

    // when
    const { result } = renderHook(() => useSearchedUsers(searchedText));

    // then
    expect(result.current.isLoading).toBe(true);
  });

  it('should be fetching data wih success, if you call hook', async () => {
    // given
    getUsersSearcherWillReturn(usersSearcherResponse);

    // when
    const { result, waitFor } = await renderHook(() => useSearchedUsers(searchedText));
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
    getUsersSearcherWillReturn(usersSearcherResponse);
    const { result, waitFor } = await renderHook(() => useSearchedUsers(searchedText));

    // when
    await waitFor(() => result.current.isSuccess);

    // then
    const { data } = result.current;
    const { users, totalUsersNumber } = data;

    expect(totalUsersNumber).toStrictEqual(correctTotalUsersNumber);
    expect(users[0]).toStrictEqual(correctSearchedUser);
  });
});
