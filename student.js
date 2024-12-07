class Student {
  static students = [];  // Static property to store all students

  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.scores = [];
    Student.students.push(this);
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  getScores(){
    return this.scores
  }

  static getAllStudents(){
    return Student.students;  // Return the list of all students
  }

}

const student1 = new Student("Ahmed", 100);
const student2 = new Student("Abdelrahman", 100);
const student3 = new Student("Sami", 100);

student1.addScore(10)
student2.addScore(10)
student3.addScore(10)

console.log(
  Student.getAllStudents()
);



