//Exercise 3 - has html file
// forEach, length

var arr = ["James", "Jack", "Flora", "Mikhil"];
let elem = document.getElementById('par');

//show length of each array element on a separate line in the browser
arr.forEach(function(item){
  elem.innerText+=` ${item.length} \n`
});

