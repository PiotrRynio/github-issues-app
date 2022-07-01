import { renderHook } from 'test-utils';
import { userResponse } from 'mocks/msw/rest-api/userRequests/responses/userResponse';
import { getUserIsLoading, getUserWillReturn } from 'mocks/msw/rest-api/userRequests/mockEndpoints/userMockEndpoints';
import { useGithubUser } from './useGithubUser';
import exampleUserAvatar from 'mocks/msw/rest-api/userRequests/images/example-user-avatar-1.jpg';
import { getUserStarsHeaderWillReturn } from 'mocks/msw/rest-api/userRequests/mockEndpoints/userStarsHeaderMockEndpoints';

describe('Hook useGithubUser', () => {
  const testGithubUserLogin = 'defunkt';
  const correctGithubUser = {
    id: 2,
    login: 'defunkt',
    name: 'Chris Wanstrath',
    followersNumber: 21454,
    followingNumber: 210,
    starsNumber: 551,
    avatar: exampleUserAvatar,
  };

  it(`should render hook`, async () => {
    // when
    renderHook(() => useGithubUser(testGithubUserLogin));
  });

  it(`should start loading, if you call hook`, async () => {
    // given
    getUserIsLoading();

    // when
    const { result } = renderHook(() => useGithubUser(testGithubUserLogin));

    // then
    expect(result.current.isLoading).toBe(true);
  });

  it('should be fetching data wih success, if you call hook', async () => {
    // given
    getUserWillReturn(userResponse);
    getUserStarsHeaderWillReturn({ starsNumber: correctGithubUser.starsNumber });

    // when
    const { result, waitFor } = await renderHook(() => useGithubUser(testGithubUserLogin));
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
    getUserWillReturn(userResponse);
    getUserStarsHeaderWillReturn({ starsNumber: correctGithubUser.starsNumber });
    const { result, waitFor } = await renderHook(() => useGithubUser(testGithubUserLogin));

    // when
    await waitFor(() => result.current.isSuccess);

    // then
    expect(result.current.data).toStrictEqual(correctGithubUser);
  });
});
