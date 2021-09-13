import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// turn the array into a string
// backyard.join(',') ===>
// [[1,2,'^^',],[null,'^^',undefined],['abc','^^']] ~~~> '1,2,^^,,^^,,abc,^^'

// add a comma to account for the likely cat in the first box
// ',' + backyard.join(',') ===>
//  ',1,2,^^,,^^,,abc,^^' ~~~> ',1,2,^^,,^^,,abc,^^'

// break the line into boxes with cats
// (',' + backyard.join(',')).split(',^^') ===>
// ',1,2,^^,,^^,,abc,^^' ~~~> ['','1,2,', ',', ',abc,']

// get the number of boxes with cats
export default function countCats(matrix) {
  return (',' + matrix.join(',')).split(',^^').length - 1;
}
