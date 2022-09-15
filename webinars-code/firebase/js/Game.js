const STATUS = Object.freeze({
  NONE: null,
  STARTED: 'started',
  WIN: 'win',
  LOSE: 'lose',
})
const CONSTANTS = Object.freeze({
  SPACE: 'space',
  INTERVAL: 100,
  ENEMY_DELAY: 270
})

export default class Game {
  status = STATUS.NONE
  elements = {
    root: null, startBtn: null, gameInfo: null, timing: null
  }
  cursor = {
    x: null, y: null
  }
  enemy = {
    self: document.createElement('div'), rendered: false, position: {
      x: null, y: null
    }
  };
  time = null
  classes = {
    gameOverLose: 'lose', gameOverWin: 'win',
  }
  didFirstMove = false

  constructor({selectors, classes}) {
    const {root, startBtn, gameInfo, timing} = selectors;

    this.classes = {...this.classes, ...classes}

    this.elements.root = document.querySelector(root);
    this.elements.startBtn = document.querySelector(startBtn);
    this.elements.gameInfo = document.querySelector(gameInfo);
    this.elements.timing = document.querySelector(timing);

    document.oncontextmenu = e => {
      e.preventDefault()
      return null
    }
  }

  render() {
    document.addEventListener('mousemove', e => this.handleMouseMove(e))

    document.addEventListener('keyup', (e) => {
      if (this.status === STATUS.NONE && e.code.toLowerCase() === CONSTANTS.SPACE && this.isCursorInFrame) {
        this.start()
      }
    })
  }

  start() {
    this.status = STATUS.STARTED;

    this.elements.root.style.overflow = 'hidden';
    this.elements.root.classList.remove(this.classes.gameOverLose)
    this.elements.root.classList.remove(this.classes.gameOverWin)

    if (!this.enemy.rendered) {
      this.makeEnemy()
    }

    const intervalID = setInterval(() => {
      if (this.status === STATUS.STARTED && (!this.isCursorInFrame || this.isEnemyOnCursor())) {
        this.status = STATUS.LOSE;
      }

      if (this.isGameOver()) {
        this.endGame(intervalID)
        this.status = STATUS.NONE;
      } else {
        this.handleInterval()
      }
    }, CONSTANTS.INTERVAL)
  }

  endGame(intervalID) {
    clearInterval(intervalID)
    this.enemy.self.remove()
    this.enemy.rendered = false;
    this.time = null;
    this.elements.timing.textContent = `Your time:`
    this.didFirstMove = false

    if (this.status === STATUS.LOSE) {
      this.elements.root.classList.add(this.classes.gameOverLose)
    } else if (this.status === STATUS.WIN) {
      this.elements.root.classList.add(this.classes.gameOverWin)
    }
  }

  isGameOver() {
    return this.status === STATUS.LOSE || this.status === STATUS.WIN;
  }

  handleMouseMove(e) {
    if (this.status === STATUS.STARTED && !this.didFirstMove && this.time === null) {
      this.didFirstMove = true
    }
    this.cursor.x = e.clientX;
    this.cursor.y = e.clientY;

    this.isCursorInFrame = this.cursor.x >= this.elements.root.offsetLeft && this.cursor.x <= this.elements.root.offsetLeft + this.elements.root.clientWidth && this.cursor.y >= this.elements.root.offsetTop && this.cursor.y <= this.elements.root.offsetTop + this.elements.root.clientHeight

    const handleChange = (cursorX, cursorY) => {
      this.enemy.position.x = cursorX - (this.enemy.self.clientWidth / 2)
      this.enemy.position.y = cursorY - (this.enemy.self.clientHeight / 2)

      this.enemy.self.style.left = `${this.enemy.position.x}px`;
      this.enemy.self.style.top = `${this.enemy.position.y}px`;
    }

    setTimeout(
      handleChange,
      CONSTANTS.ENEMY_DELAY,
      this.cursor.x,
      this.cursor.y,
      this.elements.root.offsetLeft,
      this.elements.root.offsetTop
    )
  }

  handleInterval() {
    if (this.didFirstMove) {
      this.time += CONSTANTS.INTERVAL

      this.elements.timing.textContent = `Your time: ${this.getTime()}`
    }
  }

  makeEnemy() {
    const {self: enemy, position} = this.enemy;
    const {root} = this.elements;

    position.x = '50%'
    position.y = '50%'

    root.style.transformOrigin = 'center'

    enemy.style.position = 'fixed';
    enemy.style.left = position.x;
    enemy.style.top = position.y;

    enemy.classList.add('enemy');

    root.append(enemy);
    enemy.rendered = true;
  }

  getTime() {
    return `${Math.round(this.time / 1000)}.${Math.round(this.time % 1000) / CONSTANTS.INTERVAL}`
  }

  isEnemyOnCursor() {
    const {x: cursorX, y: cursorY} = this.cursor;
    const {x: enemyX, y: enemyY} = this.enemy.position;
    const {offsetWidth: enemyWidth, offsetHeight: enemyHeight} = this.enemy.self;
    console.log(enemyY, enemyHeight)
    console.log('fuck', `cursorX: ${cursorX}, cursorY: ${cursorY}, 
    enemyX: ${enemyX}, enemyY: ${enemyY}`)

    return (cursorX >= enemyX && cursorX <= enemyX + enemyWidth)
      && (cursorY > enemyY && cursorY < enemyY + enemyHeight)
  }
}