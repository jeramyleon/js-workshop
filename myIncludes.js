function myIncludes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

const fruits = ['apple', 'banana', 'cherry'];
console.log(customIncludes(fruits, 'banana'));
