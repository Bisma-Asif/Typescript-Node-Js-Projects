import inquirer from 'inquirer';

interface Student {
  id: number;
  name: string;
  courses: string[];
  balance: number;
}

const students: Student[] = [];
let nextID: number = 10000;

function addStudent(): void {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter student name:',
      },
    ])
    .then(({ name }) => {
      const student: Student = {
        id: nextID++,
        name,
        courses: [],
        balance: 0,
      };
      students.push(student);
      console.log(`Student added successfully! Student ID: ${student.id}`);
    });
}

function enrollStudent(): void {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'id',
        message: 'Enter student ID:',
      },
      {
        type: 'input',
        name: 'course',
        message: 'Enter course name to enroll:',
      },
    ])
    .then(({ id, course }) => {
      const student = students.find((stu) => stu.id === id);
      if (student) {
        student.courses.push(course);
        console.log(`${student.name} is now enrolled in ${course}.`);
      } else {
        console.log('Student not found. Please enter a valid student ID.');
      }
    });
}

function payTuitionFees(): void {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'id',
        message: 'Enter student ID:',
      },
      {
        type: 'number',
        name: 'amount',
        message: 'Enter the amount to pay:',
      },
    ])
    .then(({ id, amount }) => {
      const student = students.find((stu) => stu.id === id);
      if (student) {
        student.balance -= amount;
        console.log(`${student.name} paid $${amount} towards tuition fees.`);
        console.log(`${student.name}'s updated balance: $${student.balance}`);
      } else {
        console.log('Student not found. Please enter a valid student ID.');
      }
    });
}

function viewStatus(): void {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'id',
        message: 'Enter student ID:',
      },
    ])
    .then(({ id }) => {
      const student = students.find((stu) => stu.id === id);
      if (student) {
        console.log(`Student Name: ${student.name}`);
        console.log(`Student ID: ${student.id}`);
        console.log('Courses Enrolled:');
        student.courses.forEach((course) => console.log(`- ${course}`));
        console.log(`Balance: $${student.balance}`);
      } else {
        console.log('Student not found. Please enter a valid student ID.');
      }
    });
}

function main(): void {
  console.log('Welcome to Student Management System!');

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Choose an option:',
        choices: ['Add Student', 'Enroll Student', 'Pay Tuition Fees', 'View Status', 'Exit'],
      },
    ])
    .then(({ choice }) => {
      if (choice === 'Add Student') {
        addStudent();
      } else if (choice === 'Enroll Student') {
        enrollStudent();
      } else if (choice === 'Pay Tuition Fees') {
        payTuitionFees();
      } else if (choice === 'View Status') {
        viewStatus();
      } else if (choice === 'Exit') {
        console.log('Goodbye!');
        process.exit(0);
      } else {
        console.log('Invalid choice. Please try again.');
        main();
      }
    });
}

// Start the program
main();
