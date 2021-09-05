//Exercise 5
let spend1 = 400; //entertainment spend
let spend2 = 350; //eating out spend
let spend3 = 500; //transport spend


if (spend1 > 500) {
  alert("Entertainment spend exceeds 500!")
} else if (spend1 > 300) {
  if (spend2 > 250) {
    alert("Entertainment spend exceeds 300 and eating-out spend exceeds 250!")
  } else if (spend3 > 400) {
      alert("Entertainment spend exceeds 300 and transport spend exceeds 400!")
    }
} else {
  alert("Spending within budget.")
};