// let randomStr = "kljsdjdssdnlsd jksd jk sdkjsdjk";

// let cloneStr = randomStr;

// cloneStr = cloneStr.slice(0, 3);

// console.log("original - ", randomStr);
// console.log("clone - ", cloneStr);

// ----------------------------------

let userEnter = prompt("enter any text you like");
console.log("you entered " + userEnter.length + " charcters");

const words = userEnter.split(" ");
console.log("you entered " + words.length + " words");

if (userEnter.includes("duck")) {
  console.error("explicit language detected");
}
