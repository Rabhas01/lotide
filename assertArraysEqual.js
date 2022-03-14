const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arry1, arry2){
    let result = eqArrays(arry1, arry2)
    if( result === true ){
        console.log(`Assertion Passed: ${arry1}  ===  ${arry2}`)
    }else{
        console.log(`Assertion failed: ${arry1}  !==  ${arry2}`)
    }

}

module.exports = assertArraysEqual;