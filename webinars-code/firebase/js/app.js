import Game from './Game.js'
import db from './db.js'

const gameField = document.querySelector('.game-field')
const navPanel = document.querySelector('.controls')
const fieldHeight = `calc(100vh - ${navPanel.clientHeight}px - 80px)`

gameField.style.height = fieldHeight

const gameConfig = {
  selectors: {
    root: '.game-field',
    gameInfo: '.controls-info',
    timing: '.controls-timing',
    userName: '.controls-username'
  },
  classes: {
    gameOverLose: 'game-field--lose',
    gameOverWin: 'game-field--win'
  }
}
const game = new Game(gameConfig)
game.render()
