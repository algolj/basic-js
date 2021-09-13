import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  return [...s2].reduce(
    (acc, el) => {
      if (acc[0].includes(el)) {
        acc[0].splice(acc[0].indexOf(el), 1);
        acc[1]++;
      }
      return acc;
    },
    [[...s1], 0]
  )[1];
}
