import { renderHook } from 'test-utils';
import { getUserIsLoading } from 'mocks/msw/rest-api/userRequest/mockEndpoints/userMockEndpoints';
import { useGithubUser } from './useGithubUser';

describe('Hook useGithubUser', () => {
  const testGithubUserLogin = 'defunkt';

  it(`should start loading, if you call hook`, async () => {
    // given
    getUserIsLoading();

    // when
    const { result } = renderHook(() => useGithubUser(testGithubUserLogin));

    // then
    expect(result.current.isLoading).toBe(true);
  });
});
