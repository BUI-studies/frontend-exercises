import makeTank from "./makeTank.js";

let tank;

const startBtn = document.getElementById("start");
//make them change step value
const incrMovementBtn = document.getElementById("incrMovementBtn");
const decrMovementBtn = document.getElementById("decrMovementBtn");
const rechargeBtn = document.createElement("button");
const storageTitle = document.getElementById("storageTitle");

const enableStartBtn = () => (startBtn.disabled = false);
const handleRecharge = () => {
  storageTitle.style.color = "red";
  rechargeBtn.textContent = "Recharge";

  storageTitle.after(rechargeBtn);
};
const handleShooting = () => {
  storageTitle.textContent = `Storage: ${tank.storage}`;
};

// START BUTTON CONTROLLER
startBtn.addEventListener("click", () => {
  const nameTitle = document.getElementById("tankName");
  const healthTitle = document.getElementById("healthTitle");

  tank = makeTank(
    "Best tank",
    100,
    10,
    "blue",
    document.querySelector(".game-field")
  );
  tank.render(enableStartBtn, handleShooting, handleRecharge);

  nameTitle.textContent = `Name: ${tank.name}`;
  healthTitle.textContent = `Health: ${tank.helth}`;
  storageTitle.textContent = `Storage: ${tank.storage}`;

  startBtn.disabled = !!tank;
});

// RECHARGE BUTTON CONTROLLER
rechargeBtn.addEventListener("click", () => {
  tank.storage = 10;
  storageTitle.textContent = `Storage: ${tank.storage}`;
  storageTitle.style.color = null;
  rechargeBtn.remove();
});
