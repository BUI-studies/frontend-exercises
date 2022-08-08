/**
 * Moovie
 * @param {string} title
 * @param {string} description
 * @param {string} image
 * @param {string} year
 * @param {string} ticketCost
 */

import Seat from "./seat.js";
import { STATUSES } from "./utils.js";

/**
 * Room
 * @param {number} size
 * @param {Moovie} moovie
 * @param {number} ticketCost
 */
export default function Room(size, moovie, seatsInRow = 8) {
  this.size = size;
  this.seatsInRow = seatsInRow;
  this.moovie = moovie;

  this.elements = {};

  this.render = (seatsList) => {
    this.elements.seatsList = seatsList;
    this.elements.selectedSeats = document.querySelector(".results-list");

    this.allSeats = [];
    this.selected = [];

    for (let row = 1; row <= this.size.rows; row++) {
      for (let seat = 1; seat <= this.size.seats; seat++) {
        const newSeat = new Seat(row, seat);

        this.allSeats.push(newSeat);
        newSeat.render(this.elements.seatsList);
      }
    }

    this.elements.seatsList.addEventListener("click", (ev) =>
      this.handleClick(ev)
    );
  };

  this.handleClick = (ev) => {
    const seatElement = ev.target.closest(".seats__item");

    const seatObj = this.allSeats.find(
      (seat) => seat.elements.self === seatElement
    );

    if (seatObj.status === STATUSES.FREE) {
      seatObj.changeStatus(STATUSES.CHOICE);
      this.selected.push(seatObj);
    } else if (seatObj.status === STATUSES.CHOICE) {
      const indexOfclickedSeat = this.selected.indexOf(seatObj);

      seatObj.changeStatus(STATUSES.FREE);
      this.selected.splice(indexOfclickedSeat, 1);
    }

    this.updateSelectedSeats();
  };

  this.updateSelectedSeats = () => {
    const selectedSeatsElements = this.selected.reduce(
      (acc, seat) =>
        acc +
        `<li class="results-list__item">ряд ${seat.row} місце ${seat.number}</li>`,
      ""
    );

    this.elements.selectedSeats.innerHTML = "";
    this.elements.selectedSeats.insertAdjacentHTML(
      "afterbegin",
      selectedSeatsElements
    );
  };
}
