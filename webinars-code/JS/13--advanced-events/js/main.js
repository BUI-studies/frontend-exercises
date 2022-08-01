import { STATUSES } from "./utils.js";
import Room from "./room.js";

// import Seat from "./seat.js";
// const firstOne = new Seat(1, 1, STATUSES.FREE);

const allSeatsContainer = document.querySelector(".seats");

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
