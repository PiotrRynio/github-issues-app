import { render } from 'test-utils';
import { App } from './App';
import { screen } from 'test-utils';
import { getUserWillReturn } from '../../mocks/msw/rest-api/userRequests/mockEndpoints/userMockEndpoints';
import { getUserStarsHeaderWillReturn } from '../../mocks/msw/rest-api/userRequests/mockEndpoints/userStarsHeaderMockEndpoints';
import { userResponse } from '../../mocks/msw/rest-api/userRequests/responses/userResponse';

describe(`<App>`, () => {
  it('renders correctly', async () => {
    // when
    render(<App />);

    // then
    screen.getByRole('img', { name: /github logo/i });
    screen.getByPlaceholderText(/search/i);
    const resultsNumber = await screen.findByRole('heading', { name: /0 results/i, level: 2 });
    expect(resultsNumber).toBeInTheDocument();
    screen.getByRole('heading', { name: /Hi Programmer!/i, level: 4 });
  });

  it(`renders correctly in '/users/defunkt' path`, async () => {
    // given
    getUserWillReturn(userResponse);
    getUserStarsHeaderWillReturn({ starsNumber: 42 });

    // when
    render(<App />, { route: '/users/defunkt' });

    // then
    const avatar = await screen.findByRole('img', { name: /avatar of Chris Wanstrath user/i }, { timeout: 8000 });
    expect(avatar).toBeInTheDocument();

    screen.getByRole('heading', {
      name: /Chris Wanstrath/i,
      level: 2,
    });
    screen.getByRole('heading', {
      name: /defunkt/i,
      level: 4,
    });
    screen.getByText(/21454/i);
    expect(screen.getAllByText(/Followers/i)).toHaveLength(2);
    screen.getByText(/210/i);
    screen.getByText(/Following/i);
    screen.getByText(/star/i);
    screen.getByText(/42/i);
  }, 10000);
});
