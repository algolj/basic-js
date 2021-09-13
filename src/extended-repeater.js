import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const supRepeator = (st = '', rep = 1, repStr) =>
    `${String(st)}${repStr}`.repeat(rep).slice(0, -repStr.length);
  let option = {};
  if (typeof options !== 'undefined') {
    option = {
      addition: options.hasOwnProperty('addition') ? options.addition : '',
      additionSeparator: options.hasOwnProperty('additionSeparator')
        ? options.additionSeparator
        : '|',
      additionRepeatTimes: options.hasOwnProperty('additionRepeatTimes')
        ? options.additionRepeatTimes
        : 1,
      repeatTimes: options.hasOwnProperty('repeatTimes')
        ? options.repeatTimes
        : 1,
      separator: options.hasOwnProperty('separator')
        ? (option.separator = options.separator)
        : '+',
    };
  } else {
    option = {
      addition: '',
      additionRepeatTimes: 1,
      additionSeparator: '|',
      repeatTimes: 1,
      separator: '+',
    };
  }
  return supRepeator(
    str +
      supRepeator(
        option.addition,
        option.additionRepeatTimes,
        option.additionSeparator || '|'
      ),
    option.repeatTimes,
    option.separator || '+'
  );
}

// My first version, but the rs.school tests don't work with ?.
/*
export default function repeater(str, options) {
  const supRepeator = (st = '', rep = 1, repStr) =>
    `${String(st)}${repStr}`.repeat(rep).slice(0, -repStr.length);

  return supRepeator(
    str +
      (options?.addition != undefined || options?.additionSeparator != undefined
        ? supRepeator(
            options?.addition,
            options?.additionRepeatTimes,
            options?.additionSeparator || '|'
          )
        : ''),
    options?.repeatTimes,
    options?.separator || '+'
  );
}
*/
