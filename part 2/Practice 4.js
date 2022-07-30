/** group by the same key and sum up the value */
function practice_4(input) {
  const obj = {};
  input.forEach((item) => {
    if (obj.hasOwnProperty(item.key)) {
      obj[item.key] += item.value;
    } else {
      obj[item.key] = item.value;
    }
  });
  return obj;
}
const input4 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(practice_4(input4));
