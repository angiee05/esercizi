class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; 
  };

  get FirstName() {
    return this.firstName;
  };

  get LastName() {
    return this.lastName;
  };

  get Age() {
    return this.age;
  };

  set FirstName(_firstName) {
    this.firstName = _firstName;
  };

  set LastName(_lastName) {
    this.firstName = _lastName;
  };

  set Age(_age) {
    this.age = _age;
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