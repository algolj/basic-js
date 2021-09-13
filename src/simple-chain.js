import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value = '') {
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != 'number' ||
      position - 1 >= this.chains.length ||
      position - 1 < 0 ||
      position % 1
    ) {
      this.chains = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chains.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    return (
      this.chains
        .splice(0, this.chains.length)
        .reduce((acc, el) => `${acc}${acc ? `~~` : ''}( ${el} )`, '') || `( )`
    );
  },
};
