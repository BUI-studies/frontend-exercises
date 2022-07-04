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

  const releaseFilm = function (filmToRelease) {
    this.releaseFilm = filmToRelease;
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

const allCosts = imax.summAllTickets();
console.log(allCosts);
