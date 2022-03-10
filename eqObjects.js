const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:" ${actual}  ===  ${expected}`);
  } else {
    console.log(`👻👻👻 Assertion Failed:  ${actual}   !==   ${expected}`);
  }
};
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false