import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let nArr = String(n).split('');

  if (n >= 0) {
    if (!(n % 10)) return n / 10;
    if (nArr.length == 2) return +nArr[nArr[0] > nArr[1] ? 0 : 1];

    for (let i = 0; i < nArr.length - 1; i++) {
      if (nArr[i] < nArr[i + 1]) {
        nArr.splice(i, 1);
        break;
      }
    }
  } else {
    if (!(n % 10) && nArr.length > 3) return n / 10;
    if (nArr.length == 2) return +('-' + nArr[nArr[0] > nArr[1] ? 0 : 1]);

    for (let i = 1; i < nArr.length - 1; i++) {
      if (nArr[i] > nArr[i + 1]) {
        nArr.splice(i, 1);
        break;
      }
    }
  }

  return +nArr.join('');
}
