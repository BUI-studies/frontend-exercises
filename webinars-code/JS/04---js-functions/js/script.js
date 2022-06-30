// function showWarning() {
//   alert("WARNING");
// }

// // showWarning; //звернення
// // console.log(showWarning);

// showWarning(); //виклик

/**
 * CALCULATOR
 *
 * In:
 * - число
 * - число
 * - операція
 *
 * Out:
 * - результат
 */

function validateNumber(value) {
  while (isNaN(+value) || value === null) {
    alert("Якась фігня...ви точно число вводили?");
    value = prompt("Введіть будьласка число, а не якусь ахінєю!");
  }

  return value;
}

function calc(num1, operation, num2) {
  // if (operation === "-") {
  //   return num1 - num2;
  // } else if (operation === "+") {
  //   return num1 + num2;
  // } else if (operation === "*") {
  //   return num1 * num2;
  // } else if (operation === "/") {
  //   return num1 / num2;
  // } else {
  //   alert("Operation invalid! Pick one from the list: =, -, *, /");
  // }

  num1 = validateNumber(num1);
  num2 = validateNumber(num2);

  switch (operation) {
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      alert("Operation invalid! Pick one from the list: =, -, *, /");
  }
}

function chechCharPosition(word, index, char) {
  //your code here
}

chechCharPosition("gogi", 3, "…"); //false
chechCharPosition("gogi", 0, "g"); //true
