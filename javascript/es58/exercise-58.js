const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const findId = persons.find(item => item.id === id);
    if (findId) resolve(p);
    else reject(new Error('id not valid'));  
    }, 1000);
  });
}

fetchPersonById(4).then((person) => console.log(person)).catch((er) => console.log(er));