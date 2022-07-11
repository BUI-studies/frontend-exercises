/**
 * TASK - склад гуманіитарної допомоги
 *
 * Напишіть функцію, що повертає обʼєкт складу.
 *
 * Властивості складу:
 * - store - масив обʼєктів, кожен з яких це окремий товар з назвою та кількістю одиниць
 * - employees - масив з іменами працівників
 *
 * Методи:
 * - addItem - додати одиницю товару. Після виклику запитує у користвача окремими промптами спочатку назву, потім кількість товару.
 * - removeItem - видалити одиницю товару. Після виклику запитує у користвача окремими промптами спочатку назву, потім кількість товару що треба видалити.
 * - checkItem - перевіряє чи є товар з вказаним іменем на складі взагалі.
 * - getAmount - повертає кількість вказаного товару на складі
 * - getMoreThen - повертає масив товарів, у яких кількість більша за зазначену
 */

const makeStore = (employees) => ({
  employees: employees.every((empl) => empl.length > 2) ? employees : [],
  store: [],

  addItem(itemToAdd) {
    if (!itemToAdd) {
      const newItem = {
        title: prompt("enter the title"),
        amount: prompt("enter amount"),
      };
      this.store.push(newItem);
    } else {
      this.store.push(itemToAdd);
    }
  },

  removeItem(title, amountToRemove) {
    const itemToRemove = this.store.find((e) => e.title === title);

    itemToRemove.amount -= amountToRemove;
  },

  checkItem(titleToCheck) {
    return this.store.some((storeItem) => storeItem.title === titleToCheck);
  },

  getAmount(titleToSearch) {
    const searchedElem = this.store.find((el) => el.title === titleToSearch);

    return (searchedElem && searchedElem.amount) || "none";
    // return searchedElem?.amount || "none";
    // return this.store.find(el => el.title === titleToSearch).amount
  },

  getMoreThen(number) {
    return this.store.filter((storeElem) => storeElem.amount >= number);
  },
});

const gogiStore = makeStore(["Gogi", "Gogo", "Gaga", "Gigi"]);
const firstItem = {
  title: "hachapuri with cheese",
  amount: 20,
};

gogiStore.addItem(firstItem);
gogiStore.addItem({
  title: "hinkali",
  amount: 10,
});
gogiStore.addItem({
  title: "kingmarauli",
  amount: 10,
});
gogiStore.addItem({
  title: "tarhun",
  amount: 10,
});

gogiStore.removeItem(firstItem.title, 8);
console.log(`there are ${gogiStore.getAmount("tarhun")} tarhun left`);

console.log(gogiStore.getMoreThen(11));

console.log("shaurma checking", gogiStore.checkItem("shaurma"));
console.log(gogiStore);
