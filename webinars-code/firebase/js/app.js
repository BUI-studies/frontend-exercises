import Game from "./Game";

const gameField = document.querySelector('.game-field');
const navPanel = document.querySelector('.controls');
const fieldHeight = `calc(100vh - ${navPanel.clientHeight}px - 80px)`;

gameField.style.height = fieldHeight;

const game = new Game()
