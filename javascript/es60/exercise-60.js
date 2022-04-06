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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve((person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
};

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);
      
      if (job) {
        return resolve((job.jobTitle));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
};

async function getResponse() {
  try {
      const response1 = await fetchPersonById(2);
      const response2 = await fetchJobById(2);
      console.log(response1, response2)
  } catch(err) {
      console.log(err)
  } finally {
      console.log("Completato")
  }
 
}

getResponse()
// core here