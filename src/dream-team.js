import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// check each element of the members
// that it is a string and she starts with a capital letter
// if the element matches the condition
// leave only the first letter of the name
// if the element does not match the condition,
// change it to an empty string
// sort the array by alphavite
// after concatenating the lines,
// get the command name
export default function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .map((el) =>
          typeof el === 'string' && /[A-Za-z]/.test(el.trim()[0])
            ? el.trim()[0].toUpperCase()
            : ''
        )
        .sort()
        .join('')
    : false;
}
