// const dummyObj = {
//   name: "Gogi",
// };

// console.log(dummyObj.name);

// const clone = dummyObj;

// console.log(clone.name);
// console.log(clone === dummyObj);
// console.log("----------");

// clone.name = "not gogi";
// console.log(clone.name);
// console.log(dummyObj.name);

const user = {
  name: "Gogi",
  age: 73,
  pets: {
    goofy: {
      age: 3,
      type: "Devil",
      status: "sleep",
    },
    fluffy: {
      age: 1,
      type: "house plant",
      status: null,
    },
  },
  parents: null,
  married: false,

  //this is a method
  yell: function (name) {
    console.log(name + " Eekekeeeieiaiouaehiouahoueao!!!! Adfkjakdja!!! Fu!");
  },
};

user.yell("Nick");
