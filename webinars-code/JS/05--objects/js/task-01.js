/**
 * TASK-01
 *
 * Написати функцію, яка буде приймати 3 параметри - "назва фільму", "розклад сеансів", "вартість квитка"
 * Створюване значення цієї функції - об'єкт з трьома ключами фільму, розкладу та вартості квитків,
 * куди будуть записані значення переданих функцій аргументів. Та описати метод який буде розраховувати вартість знижки на квитки
 */

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

// let advengers = createMoovie("ADVENGERS", "SU:3pm, WEN:5pm, FRI:2am", 20);

// console.log(advengers.price);

// advengers.makeSale(0.9);

// console.log(advengers.price);

// -------- simplifyed ---------
// function createMoovie(title, schedule, ticketPrice) {
//   /**
//    * @param {number} discount - number bigger then 0 and less then 1 for calculateing new prices
//    */
//   function makeSale(discount) {
//     if (discount <= 0 || discount >= 1) {
//       console.error("Wrong argument type. Should be > 0 and < 1");
//       return null;
//     }

//     this.price = this.price * discount;
//   }

//   return {
//     title,
//     schedule,
//     price: ticketPrice,
//     makeSale,
//   };
// }
