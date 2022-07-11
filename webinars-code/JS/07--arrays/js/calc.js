const firstNumberValue = document.getElementById("firstNumber");
const secondNumberValue = document.getElementById("secondNumber");
const sumBtn = document.getElementById("sum");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

// TODO: use it in the code to optimize it
// const handlerFunction = (e) => {
//   e.preventDefault();
//   const resultValue = document.getElementById("result");
//   resultValue.value = calc(
//     +firstNumberValue.value,
//     +secondNumberValue.value,
//     cb
//   );
// }
// const listener = (cb) => handlerFunction;

const listener = (cb) => (e) => {
  e.preventDefault();
  const resultValue = document.getElementById("result");
  resultValue.value = calc(
    +firstNumberValue.value,
    +secondNumberValue.value,
    cb
  );
};

sumBtn.addEventListener("click", listener(sum));

minusBtn.addEventListener("click", listener(minus));

multiplyBtn.addEventListener("click", listener(multiply));

divideBtn.addEventListener("click", listener(divide));
