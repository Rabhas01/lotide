const eqArrays = function(arry1, arry2) {
  if (arry1.length === arry2.length) {
    for (let i = 0; i < arry1.length; i++) {
      if (arry1[i] !== arry2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const eqObjects = function(object1, object2) {

  let key1  = Object.keys(object1);
  let key2 = Object.keys(object2);
  let result = false;

  if (key1.length !== key2.length) {
    return false;
  }
    
  for (const key of key1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      result = eqArrays(object1[key], object2[key]);
    } else {
      result = object1[key] === object2[key];
    }
    if (result !== true) {
      return false;
    }
  }
  return result;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = eqObjects(actual, expected);
  if (result === true) {
    console.log(`Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`Assertion failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
    
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true
    
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false