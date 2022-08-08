/**
 * TASK-02
 *
 * Розробити функціонал, який дозволить танку на екрані рухатись за допомогою кліків по стрілочкам на клавіатурі.
 */

const _STEP = 50;
let _START_X = 0;
let _START_Y = 0;

const makeTank = (
  name,
  helth,
  storage,
  color = "blue",
  parent = document.body
) => {
  return {
    name,
    helth,
    storage,

    parent,
    self: document.createElement("img"),

    render() {
      this.self.src = `./img/tank-${color}.png`;
      this.self.style.left = `${_START_X}px`;
      this.self.style.top = `${_START_Y}px`;

      this.self.classList.add("tank");

      document.addEventListener("keydown", (ev) => {
        if (this.isInFrame()) {
          this.self.style.outline = null;
          this.makeMove(ev);
        } else {
          this.self.style.outline = "10px solid red";
        }
      });

      this.self.addEventListener("click", () => this.remove());

      this.parent.prepend(this.self);
    },

    isInFrame() {
      const selfWidth = this.self.offsetWidth;
      const selfHeight = this.self.offsetHeight;
      const selfX = this.self.offsetLeft;
      const selfY = this.self.offsetTop;

      const frameWidth = window.innerWidth;
      const frameHeight = window.innerHeight;

      return (
        selfX >= 0 &&
        selfY >= 0 &&
        selfX <= frameWidth - selfWidth &&
        selfY <= frameHeight - selfHeight
      );
    },

    makeMove(eventObj) {
      switch (eventObj.key) {
        case "ArrowUp":
          this.self.style.top = parseInt(this.self.style.top) - _STEP + "px"; //this.self.style.top => "140px" => 140
          this.self.style.transform = "rotate(180deg)";
          break;
        case "ArrowDown":
          this.self.style.top = parseInt(this.self.style.top) + _STEP + "px";
          this.self.style.transform = "rotate(0deg)";
          break;
        case "ArrowLeft":
          this.self.style.left = parseInt(this.self.style.left) - _STEP + "px";
          this.self.style.transform = "rotate(90deg)";
          break;
        case "ArrowRight":
          this.self.style.left = parseInt(this.self.style.left) + _STEP + "px";
          this.self.style.transform = "rotate(-90deg)";
          break;
      }
    },

    remove() {
      // document.removeEventListener("keydown", () => {});
      this.self.remove();
    },
  };
};

const addTankBtn = document.querySelector(".add-tank");
const addEnemyBtn = document.querySelector(".add-enemy");

addTankBtn.addEventListener("click", () => {
  _START_X += 100;
  const tank = makeTank(`Tank ${_START_X}`, 100, 100);
  tank.render();
});

addEnemyBtn.addEventListener("click", () => {
  _START_Y += 100;
  const enemy = makeTank(`Enemy ${_START_Y}`, 100, 100, "red");
  enemy.render();
});
