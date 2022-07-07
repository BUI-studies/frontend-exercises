function createMoovie(title, schedule, ticketPrice, seets = 32) {
  const moovie = {
    title: title,
    schedule: schedule,
    price: ticketPrice,
    seets,

    /**
     * @param {number} discount - number bigger then 0 and less then 1 for calculateing new prices
     */
    makeSale: function (discount) {
      if (discount <= 0 || discount >= 1) {
        console.error("Wrong argument type. Should be > 0 and < 1");
        return null;
      }

      this.price = this.price * discount;
    },
  };

  return moovie;
}

/**
 * TASK-02
 *
 * Доповнити функціонал першої задачі, написати функцію для створення кінотеатру
 *
 * Аргументи - імʼя кіонтеатру, адреса, набір фільмів.
 * Якщо набір фільмів не був переданий при виклику функції - присвоїти пустий масив.
 *
 * Створюване значення цієї функції - об'єкт з такими ключами: name, address, filmsStock, filmsRelease.
 *
 * Написати метод для сумми всіх квитків з фільмів які має кінотеатр. В результаті його роботи
 * створювати власивість budget, куди записувати отриману цифру.
 *
 * Написати метод який буде по четвергам релізити рандомний фільм з кінотеатру
 */

function cinema(name, address, defaultFilmsStock = []) {
  const summAllTickets = function () {
    let sum = 0;

    for (let film of this.filmsStock) {
      sum += film.price * film.seets;
    }

    return sum;
  };

  const releaseFilm = function () {
    const today = new Date();

    if (today.getDay() === 4) {
      const randomIndex = Math.floor(
        Math.random() * (this.filmsStock.length - 1)
      );
      this.filmsRelease = this.filmsStock[randomIndex];
    }
  };

  return {
    name,
    address,
    filmsStock: defaultFilmsStock,
    filmsRelease: null,

    summAllTickets,
    releaseFilm,
  };
}

const imaxFilmStore = [
  createMoovie("Boogi man", "", 30, 100),
  createMoovie("Vechoru blyz Dykanky", "", 50, 400),
  createMoovie("avangers", "", 10, 1000),
  createMoovie("green mile", "nonstop", 20, 200),
];

const imax = cinema("IMAX", "in the middle of nowhere", imaxFilmStore);
imax.releaseFilm();

console.log(imax);

const allCosts = imax.summAllTickets();
console.log(allCosts);
