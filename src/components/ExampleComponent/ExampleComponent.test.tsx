import { render, screen } from 'test-utils';
import { ExampleComponent } from './ExampleComponent';

describe(`<ExampleComponent>`, () => {
  test('renders Example example text', () => {
    render(<ExampleComponent />);
    const linkElement = screen.getByText(/Example component/i);
    expect(linkElement).toBeInTheDocument();
  });
});
