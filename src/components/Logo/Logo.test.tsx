import { render, screen } from 'test-utils';
import { Logo } from './Logo';

describe(`<Logo>`, () => {
  it('renders logo', () => {
    // when
    render(<Logo />);

    // then
    const logo = screen.getByRole('img', { name: 'github logo' });
    expect(logo).toBeInTheDocument();
  });
});
