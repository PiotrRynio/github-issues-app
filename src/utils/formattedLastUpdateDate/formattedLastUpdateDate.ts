export const formattedLastUpdateDate = (lastUpdateDate: Date) => {
  const formattedLastUpdateDate = lastUpdateDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return formattedLastUpdateDate;
};
