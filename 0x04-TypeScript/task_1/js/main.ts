interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// interface printTeacherFunction {
//   firstName: string,
//   lastName: string,
// }
// const printTeacher: printTeacherFunction = (firstName, lastName) => {
  //   return `${firstName.charAt(0)}. ${lastName}`;
  // };
  // function printTeacher(teachFullName: printTeacherFunction): string {
  //   return `${teachFullName.firstName[0]}. ${teachFullName.lastName}`;
  // }
  // console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));

// Interface definition
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation
const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));