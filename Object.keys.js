Object.grabKeys = function(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

const student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 22,
  gender: 'male'
};

const keys = Object.grabKeys(student);
console.log(keys); 
