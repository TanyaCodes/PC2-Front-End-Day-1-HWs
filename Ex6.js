//Exercise 6: forEach loop, add 2% only for amounts amove 4000, store value in same array
var exp = [4500, 5000, 6500, 5000, 2800, 3500];

//defining the function
//update the function to add 2% to expenses above 4,000
let interestFxn = function(num, index, exp) {
  if (num > 4000) {
    num = (num*1.02)
  } else {
    num = num;
  } ;
  exp[index] = num;
  
};
//using forEach
exp.forEach(interestFxn, exp);
console.log(exp);

//Using inline callback function
/*var expenses = [4500, 5000, 6500, 5000, 2800, 3500];
expenses.forEach(function(num, index, array) {
  if (num > 4000) {
    num = (num*1.02);
    expenses[index] =num;
  }})

console.log(expenses)
*/
