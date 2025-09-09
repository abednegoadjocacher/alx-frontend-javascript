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

/**
 * A function printTeacher that takes two parameters firstName and lastName
 * @param firstName - First name of the teacher
 * @param lastName - Last name of the teacher
 * @return - The first letter of the firstName and the full lastName
 */

function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + '. ' + lastName;
}
console.log(printTeacher('John', 'Doe'));

//Write an interface for the function named printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}