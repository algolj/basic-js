import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (
          finalArr.length - 1 >= 0 &&
          arr[i - 1] == finalArr[finalArr.length - 1]
        )
          finalArr.splice(finalArr.length - 1, 1);
        break;
      case '--double-next':
        if (i + 1 < arr.length) finalArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (
          finalArr.length - 1 >= 0 &&
          arr[i - 1] == finalArr[finalArr.length - 1]
        )
          finalArr.push(finalArr[finalArr.length - 1]);
        break;
      default:
        finalArr.push(arr[i]);
    }
  }
  return finalArr;
}
