// const counter = function () {
//   return {
//     incr: 0,
//     count: function () {
//       return ++this.incr;
//     },
//   };
// };

// const myCounter = counter();

// console.log(myCounter.count());
// console.log(myCounter.count());
// console.log(myCounter.count());
// console.log(myCounter.count());
// console.log(myCounter.count());
// console.log(myCounter.count());
// console.log(myCounter.count());
// console.log(myCounter.count());
// console.log(myCounter.count());

// const counter = function () {
//   let incr = 0;

//   return function () {
//     return ++incr;
//   };
// };

// const myCounter = counter();
// const myCounter1 = counter();

// console.log(myCounter());
// console.log(myCounter1());
// console.log(myCounter1());

// console.log(myCounter());
// console.log(myCounter1());

const sum = (a, b) => a + b;

const minus = (a, b) => a - b;

const divide = (a, b) => {
  if (b === 0) return "division by zero";
  return a / b;
};

const multiply = (a, b) => a * b;

const calc = (a, b, functionToCall) => {
  // if (!validateNumbers(a, b)) {
  //   return null;
  // }

  //make request to analytics

  return functionToCall(a, b);
};

// const simpleFunction = function (str) {
//   return str.length > 0;
// };

// const simpleFunction = (str, str2) => {
//   return str.length > 0 && str2.length > 0 && str.length > str2.length;
// };

// const user = {
//   name: "gogi",
//   getName: function () {
//     const temp = () => {
//       console.log(this);
//       return this.name;
//     };

//     return temp();
//   },
// };

// console.log(user.getName());

const arr = [1, 2, 3, 4, 44, {}, "333"];

// console.log(arr);

// arr.push(prompt("heyho"));

// console.log(arr);

// arr.unshift("mozarella");

// console.log(arr);

// console.log("pop method return value", arr.pop());

// console.log(arr);

/**
 * @param {Array} srcArr - source array to perate with
 * @param {Function} customLogic - callback function with custom logics. receives every array element
 */
const myForEach = (srcArr, customLogic) => {
  for (let i = 0; i < srcArr.length; i++) {
    customLogic(srcArr[i], i);
  }
};

const myFilter = (srcArr, checker) => {
  let resultArr = [];

  for (let iterIndex = 0; iterIndex < srcArr.length; iterIndex++) {
    const currentElement = srcArr[iterIndex];

    if (checker(currentElement, iterIndex)) {
      resultArr.push(currentElement);
    }
  }

  return resultArr;
};

const myFind = (srcArr, compare) => {
  for (let iterIndex = 0; iterIndex < srcArr.length; iterIndex++) {
    const currentElement = srcArr[iterIndex];

    if (compare(currentElement, iterIndex)) {
      return currentElement;
    }
  }

  return null;
};

const mySome = (srcArr, compare) => {
  for (let iterIndex = 0; iterIndex < srcArr.length; iterIndex++) {
    const currentElement = srcArr[iterIndex];

    if (compare(currentElement, iterIndex)) {
      return true;
    }
  }

  return false;
};

const myMap = (srcArr, mapper) => {
  let resultArr = [];

  for (let iterIndex = 0; iterIndex < srcArr.length; iterIndex++) {
    const currentElement = srcArr[iterIndex];

    resultArr.push(mapper(currentElement, iterIndex));
  }

  return resultArr;
};

console.log(myMap(arr, (arEl) => arEl * 2));

// console.log(myFind(arr, (arrElem) => arrElem > 10));

// myFilter(arr, (arrElement) => isNaN(arrElement));

// myForEach(arr, (elem) => {
//   if (isNaN(elem)) {
//     console.error("AHTUNG! NOT a NUMBER is detected");
//   }

//   console.log(elem);
// });
