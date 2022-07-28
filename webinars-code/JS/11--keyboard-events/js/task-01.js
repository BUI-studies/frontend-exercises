/**
 * TASK-01
 *
 * Реалізувати функціонал валідації текстового поля для вводу.
 * Якщо значення у полі успішно проходить валідацію - підсвічувати поле зеленим кольором.
 * Якщо значення у полі не проходить валідацію - підсвічувати поле червоним кольором.
 *
 * Правила для валідації:
 * - поле не може бути пустим;
 * - поле не може містити небуквенні символи;
 * - значення має складатися мімнімум з 10 символів;
 * - значення не може бути більше 100 символів;
 */

const isStrEmpty = (str) => str.length === 0;
const isStrContainsNonLetter = (str) => /[^a-zA-Z]/.test(str);
const isStrLengthLessThan10 = (str) => str.length < 10;
const isStrLengthMoreThan100 = (str) => str.length > 100;

const userOpinionInput = document.querySelector(".user-opinion");

userOpinionInput.addEventListener("keyup", (event) => {
  const userOpinion = event.target.value;

  if (
    isStrEmpty(userOpinion) ||
    isStrContainsNonLetter(userOpinion) ||
    isStrLengthLessThan10(userOpinion) ||
    isStrLengthMoreThan100(userOpinion)
  ) {
    event.target.style.backgroundColor = "red";
  } else {
    event.target.style.backgroundColor = "green";
  }
});
