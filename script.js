const name = "Asim";
const age = 25;
const occupation = "Software Developer";
const greeting = `Hi, my name is ${name} and I am a ${age} year old`;
// console.log(greeting);

const user = {
  name: "Selsabil",
  role: "Translator",
};
const description = `Hello, my name is ${user.name} and I am a ${user.role}.`;
// console.log(description);

//if/else conditiond
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount;
} else if (country === "misir") {
  price -= 20;
} else if (country === "amerika") {
  price -= 60;
} else {
  price -= 30;
}
// console.log(price);

// The array map method

const swappingCases = "asIM SeLIm";
const invertedNumbers = [1, -20, 15, 80, -50, 330, -100];
const ignoreNumbers = "Elma214sr48y";

const sw = swappingCases
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");
console.log(sw); //'ASim sEliM'

const inver = invertedNumbers.map(function (ele) {
  return -ele;
});
console.log(inver); //[ -1, 20, -15, -80, 50, ... ]

const ig = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");
console.log(ig); //'Elmasry'

// filter method

const mix = "A12BS2Z3X";
// filter strings + multiply
const filterNumbers = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  }) // filter numbers 1223
  .map(function (ele) {
    return ele * ele; // multiply
  })
  .join("");
console.log(filterNumbers); // 1*1 4*4 4*4 9*9 = 1449
