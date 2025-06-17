function myEach(callback, array) {
    for (let i = 0; i < array.length; i++) {
        console.log(callback(array[i]));
    }
}

let numbers = [1, "hi", 3, 4, "bye", 6];

myEach(isNaN, numbers); 




