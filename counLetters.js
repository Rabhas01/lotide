const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed:" ${actual}  ===  ${expected}`);
    } else {
      console.log(`👻👻👻 Assertion Failed:  ${actual}   !==   ${expected}`);
    }
  };

  const countLetters = function(strng){
   const jointStrng = strng.split(' ').join('');
    let obj = {};

    for (let chrt of jointStrng){
        if(!obj[chrt]) obj[chrt] = 0;
       obj[chrt] += 1; 
               
  }
  return obj;
};
assertEqual(countLetters("lighthouse in the house"),{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }) 


