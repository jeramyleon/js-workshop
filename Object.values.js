Object.grabKeys = function(obj) {
  let arr = [];
  for (let value in obj) {
    arr.push(value);
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
