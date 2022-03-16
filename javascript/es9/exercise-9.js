function getKeys(obj) {
  let keys = Object.keys(obj);
  //let i = 0;
  //for (let key of Object.keys(obj)) {
    //keys = key;
    //i++;
  //}
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