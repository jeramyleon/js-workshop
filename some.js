let numbers = [1, 2, 3, 4, 5, 6];

function isEven(number) {
    return number % 2 === 0; 
}

function mySome(callback, array) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return true;
        } 
    }

    return false;
}

console.log(mySome(isEven, numbers));
