//Exercise 6: forEach loop, add 2% only for amounts amove 4000, store value in same array
var exp = [4500, 5000, 6500, 5000, 2800, 3500];

//update the function to add 2% to expenses above 4,000
//declaring a function then using it as a callback to foreach
let interestFxn = function(num, index, exp) {
  if (num > 4000) {
    num = (num*1.02)
  } else {
    num = num;
  } ;
  exp[index] = num;
  
};

exp.forEach(interestFxn);
console.log(exp);

//shorter version of code above
var expense = [4500, 5000, 6500, 5000, 2800, 3500];
let interestFn = function(num, index, expense) {
  if (num > 4000) {
  
  expense[index] = num*1.02;}
  
};

expense.forEach(interestFn);
console.log(expense)


//Using inline callback function
var expenses = [4500, 5000, 6500, 5000, 2800, 3500];
expenses.forEach(function(num, index, array) {
  if (num > 4000) {
    num = (num*1.02);
    expenses[index] =num;
  }})

console.log(expenses)

