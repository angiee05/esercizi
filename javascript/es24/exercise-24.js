const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for (let value of Object.values(person)) {
  console.log(value);
}

// Print values of person using Object.values