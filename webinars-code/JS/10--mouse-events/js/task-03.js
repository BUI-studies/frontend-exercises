/**
 * TASK-03
 *
 * Напишіть невеличку гру "Том і Джеррі".
 * Суть гри у тому щоб картинка кота Тома ганялася за картинкою Джеррі.
 * Положення картинки Джеррі задається координатами миші.
 * Положення картинки Тома задається теж координатами миші, але із затримкою, щоб дати гравцю можливість втікти.
 */

const jerry = document.createElement("img");
const tom = document.createElement("img");

jerry.src = "./img/jerry.png";
tom.src = "./img/tom.png";

jerry.classList.add("illustration");
jerry.classList.add("follow-cursor");

tom.classList.add("illustration");
tom.classList.add("follow-cursor");
tom.classList.add("follow-cursor--delay");

document.body.prepend(tom, jerry);

document.body.addEventListener("mousemove", function (event) {
  jerry.style.left = event.x + "px";
  jerry.style.top = event.y + "px";

  tom.style.left = event.x + "px";
  tom.style.top = event.y + "px";
});
