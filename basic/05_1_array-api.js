// Q1. make a string out of an array -> join()
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.join(","));
}

// Q2. make an array out of a string -> split()
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const arr = fruits.split(",");
  console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] -> reverse()
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
  // reverse는 원래의 배열도 변환시킨다.
}

// Q4. make new array without the first two elements -> slice()
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2));
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90 -> find()
{
  const student = students.find((student) => student.score === 90);
  console.log(student);
}

// Q6. make an array of enrolled students -> filter()
{
  // Me
  const arr = [];
  students.forEach((student) => {
    if (!!student.enrolled) arr.push(student);
  });

  // Answer
  console.log(students.filter((student) => student.enrolled));
}

// Q7. make an array containing only the students' scores -> map()
// result should be: [45, 80, 90, 66, 88]
{
  const arr = students.map((el) => el.score);
  console.log(arr);
}

// Q8. check if there is a student with the score lower than 50 -> some()
{
  console.log(students.some((el) => el.score < 50));
}

// Q9. compute students' average score -> reduce()
{
  const average =
    students.reduce((acc, cur) => acc + cur.score, 0) / students.length;
  console.log(average);
}

// Q10. make a string containing all the scores -> map().join()
// result should be: '45, 80, 90, 66, 88'
{
  const string = students.map((el) => el.score).join(", ");
  console.log(string);
}

// Bonus! do Q10 sorted in ascending order -> map().sort().join()
// result should be: '45, 66, 80, 88, 90'
{
  const string = students
    .map((el) => el.score)
    .sort((a, b) => a - b)
    .join(", ");
  console.log(string);
}
