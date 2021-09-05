//Exercise 4 
//dd-mm-yy to yy-mm-dd
// Options: Stack (Push and Pop); Splice; slice; for loop

//Using stack operations (push and pop)

let switchDate = (date) => {
  let arr = date.split('-');
  console.log(arr);
  let newArr = [];
  for (let i = 0; i < 3; i++) {
    newArr.push(arr.pop())};
  console.log(newArr);
  let newDate = newArr.join("-");
  console.log(newDate)
};

switchDate("05-09-21");



//Using split and unshift
let reverseDate = (date) => {
  let arr = date.split('-');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  };
  let newDate = newArr.join('-');
  console.log(newDate)
};
reverseDate("05-09-21");

//Using split method and template literals
//Declaring the function
let dateReverse = (date) => {
  let year = date.split('-');
  return (`${year[2]}-${year[1]}-${year[0]}`)
};
//Calling the function and logging the result into the console
console.log(dateReverse("04-09-21"))
