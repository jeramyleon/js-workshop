function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;
  if (accumulator === undefined) {
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}