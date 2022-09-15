import Game from './Game.js'
import db from './db.js'

const gameField = document.querySelector('.game-field')
const navPanel = document.querySelector('.controls')
const fieldHeight = `calc(100vh - ${navPanel.clientHeight}px - 80px)`

gameField.style.height = fieldHeight

db.collection('history')
  .get()
  .then(querySnapshot => {
    let historyItems = []

    querySnapshot.forEach(doc => {
      historyItems.push({
        id: doc.id,
        ...doc.data()
      })
    })

    const gameConfig = {
      selectors: {
        root: '.game-field',
        gameInfo: '.controls-info',
        timing: '.controls-timing'
      },
      classes: {
        gameOverLose: 'game-field--lose',
        gameOverWin: 'game-field--win'
      },
      history: historyItems
    }
    const game = new Game(gameConfig)
    game.render()
  })
