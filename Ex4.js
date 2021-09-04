//Exercise 4 
//dd-mm-yy to yy-mm-dd
// Options: Stack (Push and Pop); Splice; slice; for loop


//Using Stack operations
let reverseDate = (date) => {
  let arr = date.split('-');
  let newDate = [];
  for (let i = 0; i < arr.length; i++) {
    newDate.unshift(arr[i]);
  };
  let newArr = newDate.join('-');
  console.log(newArr)
};
reverseDate("05-09-21");

//Using split method and template literals
//Declaring the function
let dateReverse = (date) => {
  let year = date.split('-');
  return (`${year[2]}-${year[1]}-${year[0]}`)
};
//Calling the function and logging the result into the console
console.log(dateReverse("04-09-21"));
