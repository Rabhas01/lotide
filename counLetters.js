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

let obj = countLetters("lighthouse in");
assertEqual(obj["i"], 2);


