const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}



for (let [key, value] of Object.entries(person))  { 
  console.log(key + ": " + value);
}


// Print values of person using Object.keys