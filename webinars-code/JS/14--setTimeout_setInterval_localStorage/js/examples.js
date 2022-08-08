// const buttonSend = document.querySelector("#btn");

// buttonSend.addEventListener("click", () => {
//   const input = document.getElementById("message");
//   const delay = document.getElementById("delay");
//   const text = input.value;

//   setTimeout(() => {
//     alert(text);
//   }, delay);
// });

// const intervalCounter = (end) => {
//   let counter = 0;

//   const counterId = setInterval(() => {
//     if (counter >= end) {
//       clearInterval(counterId);
//     }

//     console.log(++counter);
//   }, 1000);

//   console.log("code line after interval declaration");
// };

// intervalCounter(12);

const saveBtn = document.getElementById("saveBtn");
const userName = document.getElementById("userName");
const theme = document.getElementById("theme");

const userInfo = localStorage.getItem("userInfo");

// if (userNameVal) {
//   userName.value = userNameVal;
//   userName.disabled = true;
// } else {
//   userName.disabled = false;

//   saveBtn.addEventListener("click", () => {
//     localStorage.setItem("userName", userName.value);
//     alert("User name successfully saved");
//   });
// }

saveBtn.addEventListener("click", () => {
  const userInfo = {
    userName: userName.value,
    theme: theme.value,
  };

  sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
});

const storageValue = JSON.parse(sessionStorage.getItem("userInfo"));
console.log(storageValue);
