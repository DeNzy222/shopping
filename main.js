"use strick";

const NAmeUser = "Dennis";
const age1 = 14;

function GetSurnName(GetName, ageGet) {
  GetName = "dennis";
  ageGet = age1;

  if ((GetName === " ", GetName === age1)) {
    console.log("There is some mistake");
  } else {
    console.log("It works while");
  }
}
GetSurnName();

// arrow function

const PPSurnNames = {
  firstSurnName: "g",
  secondSurnName: "c",
  lastSurnName: "a",
  nameIS: "a",
  age: 0,

  GetSurnName() {
    this.firstSurnName;
    this.secondSurnName;
    this.lastSurnName;
    this.nameIS;
    this.age;
    if (this.nameIS === this.lastSurnName) {
      this.nameIS = "Andrew";
      console.log("Hello", this.nameIS);
    } else if (this.age === 0) {
      console.log("incorrect age");
    } else {
      console.log("works");
    }
  },
};
PPSurnNames.GetSurnName();

// calculate

// let userNumIs = '';
// console.log(+prompt(''));







const GetSet = document.getElementById('show_set').addEventListener('click', () => {
  setInterval(() => {
    console.log('click')
  }, 1200)
});





