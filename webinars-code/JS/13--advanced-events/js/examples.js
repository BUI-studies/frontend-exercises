// const parentElement = document.getElementById("parent");
// const link = document.querySelector(".page-link");

// parentElement.addEventListener(
//   "click",
//   (ev) => {
//     console.log(ev.target, ev.currentTarget);
//     alert("You clicked on the parent element");
//   },
//   true
// );

// link.addEventListener(
//   "click",
//   (ev) => {
//     console.log(ev.target, ev.currentTarget);
//     alert("You clicked on the link");
//     ev.stopPropagation();
//   },
//   true
// );

const modalBtn = document.getElementById("modal");

modalBtn.addEventListener("click", (ev) => {
  const modalWindow = document.createElement("div");

  modalWindow.classList.add("modal");

  modalWindow.insertAdjacentHTML(
    "afterbegin",
    `<div class="modal-content">
      <h2>Gogi just got fired!</h2>
      <button>Ok</button>
      <button>Cancel</button>
    </div>`
  );

  modalWindow.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("modal")) {
      ev.currentTarget.remove();
    }
  });

  ev.target.after(modalWindow);
});
