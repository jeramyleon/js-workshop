function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

const numbers = [2, 4, 6, 8];
const allEven = myEvery(numbers, function(num) {
  return num % 2 === 0;
});
console.log(allEven);
