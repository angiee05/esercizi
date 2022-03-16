function getKeys(obj) {
  let keys = [];
  let i = 0;
  for (let key of Object.keys(obj)) {
    keys[i] = key;
    i++;
  }
  return keys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);