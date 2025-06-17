function myIndexOf(arr, element){
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == element){
            return i;
        }
    }
    return -1;
}

const numbers = [5, 10, 15, 20];
console.log(customIndexOf(numbers, 15));
