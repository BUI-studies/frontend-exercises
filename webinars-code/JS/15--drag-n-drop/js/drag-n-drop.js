const listWrapper = document.querySelector(".container");
let dragTarget = null;

const toggleClassOver = (target, stage) => {
  if (target.classList.contains("box")) {
    if (stage === "enter") {
      target.classList.add("over");
    } else if (stage === "leave") {
      target.classList.remove("over");
    }
  }
};

const handleDragStart = ({ target, dataTransfer }) => {
  dragTarget = target;

  dragTarget.classList.add("dragging");

  dataTransfer.effectAllowed = "move";
  dataTransfer.setData("text/html", dragTarget.outerHTML);
};

const handleDragEnter = ({ target }) => toggleClassOver(target, "enter");

const handleDragLeave = ({ target }) => toggleClassOver(target, "leave");

const handeDrop = (ev) => {
  ev.stopPropagation();

  dragTarget.classList.remove("dragging");
  if (dragTarget !== ev.target && ev.target.classList.contains("box")) {
    ev.target.classList.remove("over");

    dragTarget.outerHTML = ev.target.outerHTML;
    ev.target.outerHTML = dragTarget.outerHTML;
  }

  return false;
};

const handleDragEnd = ({ target }) => {
  target.classList.remove("dragging");

  document.querySelectorAll(".over").forEach((item) => {
    item.classList.remove("over");
  });

  dragTarget = null;
};

const resetHandler = (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
};

listWrapper.addEventListener("dragstart", handleDragStart);
listWrapper.addEventListener("dragover", resetHandler);

listWrapper.addEventListener("dragenter", handleDragEnter);
listWrapper.addEventListener("dragleave", handleDragLeave);

listWrapper.addEventListener("dragend", handleDragEnd);
listWrapper.addEventListener("drop", handeDrop);
