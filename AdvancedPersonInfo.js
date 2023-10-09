/* Filename: AdvancedPersonInfo.js */

// This code demonstrates a complex Person Information System in JavaScript
// It includes multiple classes, inheritance, encapsulation, and extensive functionality

// Person class represents a generic person with basic information
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Employee class extends Person and adds employment-related features
class Employee extends Person {
  constructor(name, age, gender, company, position) {
    super(name, age, gender);
    this.company = company;
    this.position = position;
  }

  introduce() {
    super.introduce();
    console.log(`I work at ${this.company} as a ${this.position}`);
  }

  work() {
    console.log(`${this.name} is working at ${this.company}`);
  }
}

// Student class extends Person and adds educational features
class Student extends Person {
  constructor(name, age, gender, school, grade) {
    super(name, age, gender);
    this.school = school;
    this.grade = grade;
  }

  introduce() {
    super.introduce();
    console.log(`I study at ${this.school} in grade ${this.grade}`);
  }

  study() {
    console.log(`${this.name} is studying at ${this.school}`);
  }
}

// Teacher class extends Employee and adds teaching-specific features
class Teacher extends Employee {
  constructor(name, age, gender, company, position, subject) {
    super(name, age, gender, company, position);
    this.subject = subject;
  }

  introduce() {
    super.introduce();
    console.log(`I teach ${this.subject}`);
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}`);
  }
}

// Driver code
const john = new Person("John", 30, "Male");
john.introduce();

const alice = new Employee("Alice", 25, "Female", "ABC Corp", "Manager");
alice.introduce();
alice.work();

const bob = new Student("Bob", 18, "Male", "XYZ School", 12);
bob.introduce();
bob.study();

const sarah = new Teacher("Sarah", 40, "Female", "PQR University", "Professor", "Math");
sarah.introduce();
sarah.teach();

// ... continue adding more sophisticated code and additional classes if desired

// This file can be executed by running 'node AdvancedPersonInfo.js' in the command line.