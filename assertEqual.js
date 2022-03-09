const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:" ${actual}  ===  ${expected}`);
  } else {
    console.log(`👻👻👻 Assertion Failed:  ${actual}   !==   ${expected}`);
  }
};


assertEqual("abc", "abc");
assertEqual("abc", "abcs");
assertEqual("123", "123");
assertEqual("123", "321");