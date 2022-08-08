let items = document.querySelectorAll(".container .box");
let dragElement = null; //той елемент, ЯКИЙ користувач таскає по екрану

const dragStart = (ev) => {
  ev.target.classList.add("dragging");

  dragElement = ev.target; //збереження елемента, який користувач таскає по екрану. шоб до нього був доступ у інший функціях без зайвого гємору

  ev.dataTransfer.effectAllowed = "move";
  ev.dataTransfer.setData("text/html", ev.target.innerHTML);
};

const resetHandler = (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
};

const dragEnter = (ev) => {
  ev.target.classList.add("over");
};

const dragLeave = (ev) => {
  ev.target.classList.remove("over");
};

const handleDrop = (ev) => {
  ev.stopPropagation();

  //ev.target - той елемент, НАД ЯКИМ завершився drag
  if (dragElement !== ev.target) {
    dragElement.classList.remove("dragging");

    dragElement.innerHTML = ev.target.innerHTML; //заміна елемента, який користувач таскав на елемент, на якому користувач завершив drag
    ev.target.innerHTML = ev.dataTransfer.getData("text/html"); //заміна елемента, на якому користувач завершив drag на елемент, який користувач таскав по екрану
  }

  return false;
};

const dragEnd = (ev) => {
  ev.target.classList.remove("dragging");

  document.querySelectorAll(".over").forEach((item) => {
    item.classList.remove("over");
  });

  dragElement = null;
};

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragover", resetHandler);

  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragleave", dragLeave);

  item.addEventListener("drop", handleDrop);
  item.addEventListener("dragend", dragEnd);
});
