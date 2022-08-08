import Room from "./room.js";
import { setStorageItem } from "./utils.js";

// import Seat from "./seat.js";
// const firstOne = new Seat(1, 1, STATUSES.FREE);

const allSeatsContainer = document.querySelector(".seats");
const bookingBtn = document.querySelector(".action-btn");

// firstOne.render(allSeatsContainer);
const gogiMoovie = {
  title: "Gogi",
  description: "Gogi is a movie",
  image: "https://via.placeholder.com/150",
  year: "2020",
  ticketCost: "100",
};

const roomSize = { rows: 5, seats: 8 };
const gogiRoom = new Room(roomSize, gogiMoovie);

gogiRoom.render(allSeatsContainer);

console.log(gogiRoom);

bookingBtn.addEventListener("click", (event) => {
  const selectedSeats = gogiRoom.selected;
  const allSeatsReserved = gogiRoom.selected.reduce(
    (acc, curr) => `${acc} \n row: ${curr.row}, seat: ${curr.number}`,
    ""
  );

  const confirmation = confirm(`Do you want to book: ${allSeatsReserved}?`);

  if (confirmation) {
    event.target.disabled = true;

    setStorageItem("selected", selectedSeats);

    alert("your booking succesfully completed");

    setTimeout(() => {
      event.target.disabled = false;
      gogiRoom.resetAllSeats();
    }, 5000);
  } else {
    alert("Okay. Go home, filthy animal!");
  }
});
