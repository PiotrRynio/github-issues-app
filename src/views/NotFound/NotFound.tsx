import { Link, Typography } from 'components';

export const NotFound = () => {
  return (
    <div>
      <Typography variant="subtitle" isSecondaryColor>
        PAGE NOT FOUND
      </Typography>
      <Link to="/">
        <Typography variant="itemTitle">Go to home pages!</Typography>
      </Link>
    </div>
  );
};
