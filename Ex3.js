//Exercise 3 - has html file

//using paragraph element, and forEach
var arr = ["James", "Jack", "Flora", "Mikhil"];
let elem = document.getElementById('par');


arr.forEach(function(item){
  elem.innerText+=` ${item}: ${item.length} characters \n` //used escape character \n to show each item on a separate line
});



//using an unordered list and for loop
/*var names = ['James','Jack','Flora', 'Mikhil'];

for (i=0; i<names.length; i++) {
    var node = document.createElement("li");                
    node.innerText = ` ${names[i]}: ${names[i].length} characters`;
    document.getElementById("answer").appendChild(node);                              
}

*/

//using unordered list and forEach
/*
var names = ['James','Jack','Flora', 'Mikhil'];

let fxn = function(name) {
    var node = document.createElement("li");                
    node.innerText = ` ${name}: ${name.length} characters`;
    document.getElementById("answer").appendChild(node);                              
};

names.forEach(fxn);
*/