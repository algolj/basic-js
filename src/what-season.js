import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const getSeasonName = (seasonNumber) =>
  seasonNumber <= 1 || seasonNumber == 11
    ? 'winter'
    : seasonNumber <= 4
    ? 'spring'
    : seasonNumber <= 7
    ? 'summer'
    : 'autumn';

export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    if (new Date(JSON.parse(JSON.stringify(date))) != 'Invalid Date') {
      return getSeasonName(date.getMonth());
    } else {
      throw '';
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }
}
