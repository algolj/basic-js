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
