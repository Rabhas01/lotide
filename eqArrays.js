const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed:" ${actual}  ===  ${expected}`);
    } else {
      console.log(`👻👻👻 Assertion Failed:  ${actual}   !==   ${expected}`);
    }
  };
  
const eqArrays = function(arry1, arry2){
    if(arry1.length === arry2.length){
        for (let i = 0; i < arry1.length; i++){
            if(arry1[i] !== arry2[i] ){
                return false
            }
        }
        return true
    }
    else {
        return false
    }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), true);