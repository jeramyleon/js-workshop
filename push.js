function myPush (arr, elementsToAdd){
   for(let i = 0; i < elementsToAdd.length; i++)
   {
        arr[arr.length] = elementsToAdd[i];
   }
   return arr.length; 
}

let fruits = ['apple', 'banana'];
console.log(myPush(fruits, ['strawberry']));