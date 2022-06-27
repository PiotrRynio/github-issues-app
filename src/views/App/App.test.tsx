import { render, screen } from 'test-utils';
import { App } from './App';

describe(`<App>`, () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
