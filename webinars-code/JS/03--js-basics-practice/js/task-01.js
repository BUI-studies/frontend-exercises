/**
 * TASK-01
 *
 * Напишіть програму для перевірки на Українця.
 *
 * User-flow:
 * Користувачу послідовно задаються запитання, на які він має відповісти.
 * У користувча є право лише на одну помилку, якщо скоїв більше - тест не пройдений.
 * Якщо користувач хоча б десь вводить одне з слів - "Росія", "Россия", "Путін", "Путин" - запустити на його компьютері while(true).
 *
 * Запитання:
 *  - Продовжіть рядок "батько наш - Бандера,..." // відповідь - Україна - мати
 *  - На що збирав гроші Притула? // відповідь - на байрактари
 *  - Як українсько-англійським суржиком привітатися з народом? // відповідь - Добрий день everybody
 *  - Слава // Україні
 *  - Слава // нації
 *  - Смерть // ворогам
 *  - Україна // понад усе!
 */

// ============= ARRAY IMPLEMENTATION =============
const questions = [
  'Продовжіть рядок "батько наш - Бандера,..."',
  "На що збирав гроші Притула?",
  "Як українсько-англійським суржиком привітатися з народом?",
  "Слава",
  "Слава",
  "Смерть",
  "Україна",
];
const answers = [
  "Україна - мати",
  "на байрактари",
  "Добрий день everybody",
  "Україні",
  "нації",
  "ворогам",
  "понад усе!",
];

let errorsCounter = 0;

for (let i = 0; i < 7; i = i + 1) {
  const response = prompt(questions[i]);

  if (
    response === "Росія" ||
    response === "Россия" ||
    response === "Путін" ||
    response === "Путин"
  ) {
    alert("Russian warship go fuck yourself!");
    while (true) {}
  }

  if (response !== answers[i]) {
    if (errorsCounter > 0) {
      break;
    } else {
      errorsCounter = errorsCounter + 1;
    }
  }
}

// ============= BASIC SIMPLE IMPLEMENTATION =============

// const response1 = prompt('Продовжіть рядок "батько наш - Бандера,..."');

// if (response1 === "Україна - мати") {
//   const response2 = prompt("На що збирав гроші Притула?");

//   if (response2 === "на байрактари") {
//     const response3 = prompt(
//       "Як українсько-англійським суржиком привітатися з народом?"
//     );

//     if (response3 === "Добрий день everybody") {
//       const response4 = prompt("Слава");

//       if (response4 === "Україні") {
//         const response5 = prompt("Слава");

//         if (response5 === "нації") {
//           const response6 = prompt("Смерть");

//           if (response6 === "ворогам") {
//             const response7 = prompt("Україна");

//             if (response7) {
//               alert("you passed the test!");
//             } else {
//               alert("you shell not pass!");
//             }
//           } else {
//             alert("you shell not pass!");
//           }
//         } else {
//           alert("you shell not pass!");
//         }
//       } else {
//         alert("you shell not pass!");
//       }
//     } else {
//       alert("you shell not pass!");
//     }
//   } else {
//     alert("you shell not pass!");
//   }
// } else {
//   alert("you shell not pass!");
// }
