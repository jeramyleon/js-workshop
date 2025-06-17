let numbers = [1, 2, 3, 4, 5, 6];

function isEven(number) {
    return number % 2 === 0; 
}

function myFilter(callback, array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(myFilter(isEven, numbers));



