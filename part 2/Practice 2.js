/** mapping character to number */
function practice_2(input, mapping) {
  const result = input.map((item) => {
    return mapping[item];
  });
  return result;
}
const arr = ["a", "b", "c", "a", "b"];
const mapping = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(practice_2(arr, mapping));
