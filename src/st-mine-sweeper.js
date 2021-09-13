import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  return matrix.reduce(
    (minefield, line, i) => {
      line.forEach((cell, j) => {
        if (cell) {
          [
            [[i - 1], [j - 1]],
            [[i - 1], [j + 1]],
            [[i + 1], [j - 1]],
            [[i + 1], [j + 1]],
            [[i - 1], [j]],
            [[i], [j + 1]],
            [[i + 1], [j]],
            [[i], [j - 1]],
          ].forEach((fr) => {
            if (
              minefield[fr[0]] != undefined &&
              minefield[fr[0]][fr[1]] != undefined
            )
              minefield[fr[0]][fr[1]]++;
          });
        }
      });
      return minefield;
    },
    Array.from(Array(matrix.length), () => new Array(matrix[0].length).fill(0))
  );
}

// My first version, but the rs.school tests don't work with ?.
/*
export default function minesweeper(matrix) {
  return matrix.reduce(
    (minefield, line, i) => {
      line.forEach((cell, j) => {
        if (cell) {
          [
            [[i - 1], [j - 1]],
            [[i - 1], [j + 1]],
            [[i + 1], [j - 1]],
            [[i + 1], [j + 1]],
            [[i - 1], [j]],
            [[i], [j + 1]],
            [[i + 1], [j]],
            [[i], [j - 1]],
          ].forEach((fr) => {
            if (minefield?.[fr[0]]?.[fr[1]] != undefined)
              minefield[fr[0]][fr[1]]++;
          });
        }
      });
      return minefield;
    },
    Array.from(Array(matrix.length), () => new Array(matrix[0].length).fill(0))
  );
}
*/
