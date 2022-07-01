import { render, screen } from 'test-utils';
import { User } from './User';
import { getUserIsLoading, getUserWillReturn } from 'mocks/msw/rest-api/userRequests/mockEndpoints/userMockEndpoints';
import { userResponse } from 'mocks/msw/rest-api/userRequests/responses/userResponse';
import { getUserStarsHeaderWillReturn } from 'mocks/msw/rest-api/userRequests/mockEndpoints/userStarsHeaderMockEndpoints';
import exampleUserAvatarUrl from 'mocks/msw/rest-api/userRequests/images/example-user-avatar-1.jpg';

describe(`<User >`, () => {
  const correctGithubUser = {
    id: '2',
    login: 'defunkt',
    name: 'Chris Wanstrath',
    followersNumber: 21454,
    followingNumber: 210,
    starsNumber: 551,
    avatar: exampleUserAvatarUrl,
  };

  it(`should display loading component, if data is fetching`, () => {
    // given
    getUserIsLoading();

    // when
    render(<User />);

    // then
    screen.getByText(`Loading...`);
  });

  it(`should render correctly`, async () => {
    // given
    getUserWillReturn(userResponse);
    getUserStarsHeaderWillReturn({ starsNumber: correctGithubUser.starsNumber });

    // when
    await render(<User />, { route: `/users/defunkt` });

    // then
    const userAvatar = await screen.findByAltText(/avatar of Chris Wanstrath user/i);
    expect(userAvatar).toBeInTheDocument();
    expect(userAvatar).toHaveAttribute('src', exampleUserAvatarUrl);
    expect(await screen.findByRole('heading', { name: /Chris Wanstrath/i, level: 2 })).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: /defunkt/i, level: 4 })).toBeInTheDocument();
    expect(await screen.findByText(/21454/i)).toBeInTheDocument();
    expect(await screen.findByText(/210/i)).toBeInTheDocument();
    expect(await screen.findByText(/551/i)).toBeInTheDocument();
  });
});
