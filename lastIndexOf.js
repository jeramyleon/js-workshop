function myUnshift(arr, target)
{
   if(arr.length !== 0)
   {
       for(let i = arr.length - 1; i >= 0; i--)
       {
         if (arr[i] === target) {

            return i;
        }      
     }
   }
   return -1;
  }

  const animals = ['cat', 'dog', 'bird', 'dog', 'fish'];
  console.log(myUnshift(animals, 'dog'));