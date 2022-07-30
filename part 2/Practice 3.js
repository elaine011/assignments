/**group by the same key and add the value to a list */
function practice_3(input) {
  const obj = {};
  input.forEach((item) => {
    if (obj.hasOwnProperty(item.key)) {
      obj[item.key].push(item.value);
    } else {
      obj[item.key] = [item.value];
    }
  });
  return obj;
}

const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(practice_3(input3));
