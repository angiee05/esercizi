const person = {
  get firstName() {
    return this.FirstName;
  },
  set firstName(val) {
    this.FirstName = val;
  },
  get lastName() {
    return this.LastName;
  },
  set lastName(val) {
    this.LastName = val;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let john = Object.create(person);
let simon = Object.create(person);

john.FirstName = "John";
john.LastName = "Doe";
simon.FirstName = "Simon";
simon.LastName = "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins