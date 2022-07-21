let counter = 0;

// document.addEventListener("click", () => {
//   console.log(++counter);
// });

const btns = document.getElementById("btnsList");

btns.addEventListener("click", (event) => {
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);
});
