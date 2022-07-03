import { render, screen } from 'test-utils';
import { TopBar } from './TopBar';

describe(`<TopBar>`, () => {
  it('renders top bar correctly', () => {
    // when
    render(<TopBar />);

    // then
    screen.getByRole('img', { name: /github logo/i });
    screen.getByPlaceholderText(/search/i);
  });
});
