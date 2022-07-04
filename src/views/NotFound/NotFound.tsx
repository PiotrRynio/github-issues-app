import { Link, Typography } from 'components';
import { usePageTitle } from 'hooks';
import { APP_NAME } from 'constants/names';
import { useEffect } from 'react';

export const NotFound = () => {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(`Not Found | ${APP_NAME}`);
  }, [setPageTitle]);

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
