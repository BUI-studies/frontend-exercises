import Seat from "./seat.js";
import { getStorageItem, setStorageItem, STATUSES } from "./utils.js";

/**
 * Moovie
 * @param {string} title
 * @param {string} description
 * @param {string} image
 * @param {string} year
 * @param {string} ticketCost
 */

/**
 * Room
 * @param {number} size
 * @param {Moovie} moovie
 * @param {number} ticketCost
 */
export default function Room(size, moovie) {
  this.size = size;
  this.moovie = moovie;

  this.elements = {};

  this.render = (seatsList) => {
    const storageSelectedSeats = getStorageItem("selected");

    this.elements.seatsList = seatsList;
    this.elements.selectedSeats = document.querySelector(".results-list");

    this.allSeats = [];
    this.selected = [];

    for (let row = 1; row <= this.size.rows; row++) {
      for (let seat = 1; seat <= this.size.seats; seat++) {
        const thisSelectedSeat = storageSelectedSeats?.find(
          (storageSeat) =>
            storageSeat.row === row && storageSeat.number === seat
        );
        const newSeat = new Seat(row, seat, thisSelectedSeat?.status);

        if (thisSelectedSeat) {
          this.selected.push(newSeat);
        }

        this.allSeats.push(newSeat);
        newSeat.render(this.elements.seatsList);
      }
    }

    this.updateSelectedSeats();
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

    setStorageItem("selected", this.selected);
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

  this.resetAllSeats = () => {
    this.allSeats.forEach((seat) => seat.changeStatus(STATUSES.FREE));
    this.selected = [];
    setStorageItem("selected", this.selected);
    this.updateSelectedSeats();
  };
}
