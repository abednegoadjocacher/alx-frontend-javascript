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

// Interface definition
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  firstName = firstName[0]; 
  return `${firstName}. ${lastName}`;
}
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));

//Create a class for students
class StudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }

}