const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:" ${actual}  ===  ${expected}`);
  } else {
    console.log(`👻👻👻 Assertion Failed:  ${actual}   !==   ${expected}`);
  }
};

const tail = function(arry) {
  let newArry = arry.slice(1);
  return newArry;
};
  



 
 let newArry = ["Hello", "Lighthouse", "Labs"]  
const result = tail([newArry]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 
assertEqual(newArry.length, 3); 


let newArry2 = ["Hello"]  
const result2 = tail([newArry2]);
assertEqual(result2.length, 0); 


let newArry3 = []  
const result3 = tail([newArry3]);
assertEqual(result3.length, 0); 
