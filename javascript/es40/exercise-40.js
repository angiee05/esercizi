class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; 
  };

  getFirstName() {
    return this.firstName;
  };

  getLastName() {
    return this.lastName;
  };

  getAge() {
    return this.age;
  };

  setFirstName(_firstName) {
    this.firstName = _firstName;
  };

  setLastName(_lastName) {
    this.firstName = _lastName;
  };

  setAge(_age) {
    this.firstName = _age;
  };

  get fullName() {
    return `Hi, I'm ${this.firstName} ${this.lastName}` 
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);