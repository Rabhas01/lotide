// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed:" ${actual}  ===  ${expected}`);
//   } else {
//     console.log(`👻👻👻 Assertion Failed:  ${actual}   !==   ${expected}`);
//   }

// };
// const assertEqual = require('./assertEqual'); .... replaces the need to paste the whole function 


const assertEqual = require('./assertEqual');

const head = function(arry) {
  return arry[0];
};

module.exports = head;