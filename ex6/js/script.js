let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Only numbers");
  if (input != null && input != "") {
    if (isNaN(input)) {
      alert("only numbers, please try again!");
    } else {
      numbers.push(Number(input));
    }
  } else break;
}
if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  alert("total: " + total);
} else {
  console.log("Dont have any numbers!");
}
console.log(numbers);
