export let _STEP = 10;

//enum
const _DIRECTIONS = Object.freeze({
  DOWN: "down",
  UP: "up",
  LEFT: "left",
  RIGHT: "right",
});

export default (
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
    direction: _DIRECTIONS.DOWN,

    parent,
    self: document.createElement("img"),

    render(
      onTankRemove = () => null,
      onShoot = () => null,
      onStorageEmpty = () => null
    ) {
      this.self.src = `./img/tank-${color}.png`;
      this.self.style.left = `${window.innerWidth * 0.5}px`;
      this.self.style.top = `${window.innerHeight * 0.5}px`;

      this.self.classList.add("tank");

      //MOVEMENT CONTROLLER
      document.addEventListener("keydown", (ev) => {
        if (this.isInFrame()) {
          this.self.style.outline = null;
          this.makeMove(ev);
        } else {
          this.self.style.outline = "10px solid red";
        }
      });

      // SHOOTING CONTROLER
      document.addEventListener("keydown", (ev) => {
        if (ev.code === "Space") {
          console.log("you pressed", this.storage);
          if (this.storage === 0) {
            onStorageEmpty(ev, this);
          }
          if (this.storage > 0) {
            this.shoot(ev);
            onShoot(ev, this);
          }
        }
      });

      this.self.addEventListener("click", (event) => {
        onTankRemove(event, this);
        this.remove();
      });

      this.parent.prepend(this.self);
    },

    isInFrame() {
      const selfWidth = this.self.offsetWidth;
      const selfHeight = this.self.offsetHeight;

      const selfX = this.self.offsetLeft;
      const selfXend = selfX + selfWidth;
      const selfY = this.self.offsetTop;
      const selfYend = selfY + selfHeight;

      const frameWidth = window.innerWidth;
      const frameHeight = window.innerHeight;

      return (
        selfX > _STEP &&
        selfXend < frameWidth - _STEP &&
        selfY > _STEP &&
        selfYend < frameHeight - _STEP
      );
    },

    makeMove(eventObj) {
      switch (eventObj.key) {
        case "ArrowUp":
          this.self.style.top = parseInt(this.self.style.top) - _STEP + "px"; //this.self.style.top => "140px" => 140
          this.self.style.transform = "rotate(180deg)";
          this.direction = _DIRECTIONS.UP;
          break;
        case "ArrowDown":
          this.self.style.top = parseInt(this.self.style.top) + _STEP + "px";
          this.self.style.transform = "rotate(0deg)";
          this.direction = _DIRECTIONS.DOWN;
          break;
        case "ArrowLeft":
          this.self.style.left = parseInt(this.self.style.left) - _STEP + "px";
          this.self.style.transform = "rotate(90deg)";
          this.direction = _DIRECTIONS.LEFT;
          break;
        case "ArrowRight":
          this.self.style.left = parseInt(this.self.style.left) + _STEP + "px";
          this.self.style.transform = "rotate(-90deg)";
          this.direction = _DIRECTIONS.RIGHT;
          break;
      }
    },

    shoot(event) {
      if (!this.cartridge) {
        this.cartridge = document.createElement("div");
        --this.storage;
      }
      const topCenter = this.self.offsetTop + this.self.offsetHeight / 2;
      const leftCenter = this.self.offsetLeft + this.self.offsetWidth / 2;
      const bottom = this.self.offsetTop + this.self.offsetHeight;
      const right = this.self.offsetLeft + this.self.offsetWidth;

      this.cartridge.classList.add("cartridge");

      switch (this.direction) {
        case _DIRECTIONS.UP:
          this.cartridge.style.top = `${this.self.offsetTop}px`;
          this.cartridge.style.left = `${leftCenter}px`;
          this.cartridge.style.transform =
            "rotate(180deg) translate(50%, 100%)";
          break;
        case _DIRECTIONS.DOWN:
          this.cartridge.style.top = `${bottom}px`;
          this.cartridge.style.left = `${leftCenter}px`;
          this.cartridge.style.transform = "rotate(0deg) translate(-50%, 0%)";
          break;
        case _DIRECTIONS.LEFT:
          this.cartridge.style.top = `${topCenter}px`;
          this.cartridge.style.left = `${this.self.offsetLeft}px`;
          this.cartridge.style.transform = "rotate(90deg)";
          this.cartridge.style.transformOrigin = `top center`;
          break;
        case _DIRECTIONS.RIGHT:
          this.cartridge.style.top = `${topCenter}px`;
          this.cartridge.style.left = `${right}px`;
          this.cartridge.style.transform = "rotate(90deg) translate(0%, -100%)";
          this.cartridge.style.transformOrigin = `top center`;
          break;
      }

      this.self.after(this.cartridge);

      const handleRemove = () => {
        if (this.cartridge) {
          this.cartridge.remove();
          this.cartridge = null;
          document.removeEventListener("keyup", handleRemove);
        }
      };

      document.addEventListener("keyup", handleRemove);
    },

    remove() {
      // document.removeEventListener("keydown", () => {});
      this.self.remove();
    },
  };
};
