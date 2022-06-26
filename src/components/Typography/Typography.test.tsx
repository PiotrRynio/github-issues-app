import { render, screen } from 'test-utils';
import { Typography } from './Typography';

describe(`<Typography>`, () => {
  const exampleText = 'Example text';

  it('renders body1 typography correctly', () => {
    // when
    render(<Typography variant="body1">{exampleText}</Typography>);

    // then
    screen.getByText(/Example text/i);
  });

  it('renders body2 typography correctly', () => {
    // when
    render(<Typography variant="body2">{exampleText}</Typography>);

    // then
    screen.getByText(/Example text/i);
  });

  it('renders small typography correctly', () => {
    // when
    render(<Typography variant="small">{exampleText}</Typography>);

    // then
    screen.getByText(/Example text/i);
  });

  it('renders ItemTitle typography correctly', () => {
    // when
    render(<Typography variant="ItemTitle">{exampleText}</Typography>);

    // then
    screen.getByRole('heading', { name: /Example text/i, level: 3 });
  });

  it('renders Title typography correctly', () => {
    // when
    render(<Typography variant="Title">{exampleText}</Typography>);

    // then
    screen.getByRole('heading', { name: /Example text/i, level: 2 });
  });
  it('renders Subtitle typography correctly', () => {
    // when
    render(<Typography variant="Subtitle">{exampleText}</Typography>);

    // then
    screen.getByRole('heading', { name: /Example text/i, level: 4 });
  });

  it('renders Pagination typography correctly', () => {
    // when
    render(<Typography variant="Pagination">{exampleText}</Typography>);

    // then
    screen.getByText(/Example text/i);
  });
});
