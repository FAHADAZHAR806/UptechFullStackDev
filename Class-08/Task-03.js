const users = [
  { name: "Alice", courses: ["Math", "Science", "English"] },
  { name: "Bob", courses: ["Math", "Art"] },
  { name: "Charlie", courses: ["Science", "Math", "History"] },
  { name: "David", courses: ["Math", "English"] },
  { name: "Eve", courses: ["Art", "Science"] },
];
let courseCount = {};
for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < users[i].courses.length; j++) {
    let course = users[i].courses[j];
    if (courseCount[course]) {
      courseCount[course]++;
    } else {
      courseCount[course] = 1;
    }
  }
}
console.log(courseCount);
let mostPopularCourse = "";
let highestCount = 0;

let courses = Object.keys(courseCount);

for (let i = 0; i < courses.length; i++) {
  let course = courses[i];

  if (courseCount[course] > highestCount) {
    highestCount = courseCount[course];
    mostPopularCourse = course;
  }
}

console.log(
  "Most popular course: " +
    mostPopularCourse +
    " with " +
    highestCount +
    " students",
);
