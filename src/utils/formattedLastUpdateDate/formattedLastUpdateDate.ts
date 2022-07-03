import { ONE_DAY_IN_MILLISECONDS, TWO_WEEKS_IN_MILLISECONDS } from '../../constants';

export const formattedLastUpdateDate = (lastUpdateDate: Date) => {
  // date to ms
  const lastUpdateDateInMilliseconds = lastUpdateDate.getTime();
  const DateNowInMilliseconds = Date.now();
  const differenceInMilliseconds = DateNowInMilliseconds - lastUpdateDateInMilliseconds;
  const millisecondsToDays = differenceInMilliseconds / ONE_DAY_IN_MILLISECONDS;

  if (differenceInMilliseconds < ONE_DAY_IN_MILLISECONDS) {
    return `today`;
  }

  if (differenceInMilliseconds < 2 * ONE_DAY_IN_MILLISECONDS) {
    return `1 day ago`;
  }

  if (differenceInMilliseconds < TWO_WEEKS_IN_MILLISECONDS) {
    return `${Math.floor(millisecondsToDays)} days ago`;
  }

  return lastUpdateDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
