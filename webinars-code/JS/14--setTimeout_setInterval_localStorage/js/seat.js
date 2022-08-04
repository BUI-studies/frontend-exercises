import { SEAT_SVG, STATUSES } from "./utils.js";

export default function Seat(row, number, status = STATUSES.FREE) {
  this.row = row;
  this.number = number;
  this.status = status;

  this.elements = {
    self: null,
  };

  this.render = (parent) => {
    this.elements.self = document.createElement("div");

    this.elements.self.classList.add("seats__item");
    this.elements.self.classList.add(`seats__item--${this.status}`);

    this.elements.self.insertAdjacentHTML("afterbegin", SEAT_SVG);

    parent.appendChild(this.elements.self);
  };

  this.changeStatus = (newStatus) => {
    this.elements.self.classList.remove(`seats__item--${this.status}`);

    this.status = newStatus;

    this.elements.self.classList.add(`seats__item--${this.status}`);
  };
}
