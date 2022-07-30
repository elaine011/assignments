/**count the occurence of characters in the list */
function practice_1(input) {
  const count = {};
  for (let i = 0; i < input.length; i++) {
    if (count[input[i]]) {
      count[input[i]] += 1;
    } else {
      count[input[i]] = 1;
    }
  }
  return count;
}

const input1 = ["a", "b", "c", "a", "c", "a"];
console.log(practice_1(input1));
