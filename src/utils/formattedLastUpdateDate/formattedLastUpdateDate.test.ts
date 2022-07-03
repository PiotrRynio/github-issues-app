import { formattedLastUpdateDate } from './formattedLastUpdateDate';

describe('formattedLastUpdateDate', () => {
  // 01.05.2022
  const testDate = new Date('2022-05-01T00:00:00.000Z');

  it('should return date in correct format', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-06-15'));

    // when
    const result = formattedLastUpdateDate(testDate);

    // then
    expect(result).toBe('1 May 2022');
  });

  it('should return number of days, if the day difference is less than 2 weeks', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-05'));

    // when
    const result = formattedLastUpdateDate(testDate);

    // then
    expect(result).toBe('4 days ago');
  });

  it('should return number of days, if the day difference is 1 day', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-02T05:01:00.000Z'));

    // when
    const result = formattedLastUpdateDate(testDate);

    // then
    expect(result).toBe('1 day ago');
  });

  it('should return number of days, if the current day is the same', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-01'));

    // when
    const result = formattedLastUpdateDate(testDate);

    // then
    expect(result).toBe('today');
  });
});
