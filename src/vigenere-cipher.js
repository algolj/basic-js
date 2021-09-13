import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(machineType) {
    this.type = machineType == false;
  }
  oops = () => {
    throw new Error('Incorrect arguments!');
  };

  checkIn = (a, b) =>
    typeof a != 'string' || typeof b != 'string' || a == '' || b == ''
      ? this.oops()
      : null;

  encLetter = (letter) => letter + (letter > 25 ? -26 : letter < 0 ? 26 : 0);

  cipher = (rightArg, leftArg, keyF = 0) =>
    /[a-zA-Z]/.test(rightArg)
      ? this.encLetter(keyF + rightArg.toLowerCase().charCodeAt() - 97)
      : leftArg;

  cryptor(message, key, sign = true) {
    this.checkIn(message, key);
    let result = [];
    let keyArr = key.split('').map((el) => this.cipher(el, this.oops));

    message.split('').reduce((acc, el) => {
      let letter = this.cipher(el, el, sign ? keyArr[acc] : -keyArr[acc]);
      if (typeof letter == 'number') {
        result.push(String.fromCharCode(letter + 65));
        acc++;
        if (acc > key.length - 1) acc = 0;
      } else {
        result.push(el);
      }
      return acc;
    }, 0);
    if (this.type) result.reverse();
    return result.join('');
  }

  encrypt(message, key) {
    return this.cryptor(message, key);
  }
  decrypt(message, key) {
    return this.cryptor(message, key, false);
  }
}
