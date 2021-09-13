import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  return !str
    ? ''
    : str
        .split('')
        .slice(1)
        .reduce(
          (acc, el, i, arr) => {
            if (acc[acc.length - 1][1] == el) {
              acc[1][0]++;
            } else {
              acc[0] += (acc[1][0] != 1 ? acc[1][0] : '') + acc[1][1];
              acc[1] = [1, el];
            }
            if (arr.length - 1 == i)
              acc = acc[0] + (acc[1][0] != 1 ? acc[1][0] : '') + acc[1][1];
            return acc;
          },
          ['', [1, str[0]]]
        );
}
