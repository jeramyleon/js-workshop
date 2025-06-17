let numbers = [6, 7, 8, 9, 10];

function double(number) {
    return number * 2; 
}

function myMap(callback, array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }

    return newArray;
}

console.log(myMap(double, numbers));
