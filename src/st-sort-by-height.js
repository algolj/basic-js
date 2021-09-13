import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // Sort arr into two arrays
  // indexAllMinusOne includes indices of values ​​-1
  // allOtherNumber includes all values ​​not equal to -1
  let { indexAllMinusOne, allOtherNumber } = arr.reduce(
    (acc, el, i) => {
      el == -1 ? acc.indexAllMinusOne.push(i) : acc.allOtherNumber.push(el);
      return acc;
    },
    { indexAllMinusOne: [], allOtherNumber: [] }
  );

  // sort all values ​​not equal to -1
  // in ascending order
  allOtherNumber.sort((a, b) => a - b);

  // Adds to the sorted allOtherNumber array all -1
  // by their index in the arr array
  for (let index of indexAllMinusOne) allOtherNumber.splice(index, 0, -1);

  return allOtherNumber;
}
