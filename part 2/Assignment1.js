/** Assignment 1 : Function and Array
 * find the max number of the passing array of numbers */

function max(numbers) {
  let maxNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));
// console.log(max([-5, -2, -7, -1, -6]));
