/**assign objects to students */
function practice_5(students, student_objects) {
  const result = student_objects.reduce((acc, cur) => {
    const id = acc.findIndex((objects) => {
      return objects.student_id === cur.student_id;
    });
    if (acc[id].hasOwnProperty("objects")) {
      acc[id].objects.push(cur.object);
      return acc;
    } else {
      acc[id].objects = [cur.object];
      return acc;
    }
  }, students);
  return result;
}
const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];
const student_objects = [
  { student_id: 1, object: "pen" },
  { student_id: 2, object: "pen" },
  { student_id: 3, object: "book" },
  { student_id: 1, object: "book" },
  { student_id: 3, object: "phone" },
];
console.log(practice_5(students, student_objects));
