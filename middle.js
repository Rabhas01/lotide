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

const assertArraysEqual = function(arry1, arry2){
    let result = eqArrays(arry1, arry2)
    if( result === true ){
        console.log(`Assertion Passed: ${arry1}  ===  ${arry2}`)
    }else{
        console.log(`Assertion failed: ${arry1}  !==  ${arry2}`)
    }

}

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed:" ${actual}  ===  ${expected}`);
    } else {
      console.log(`👻👻👻 Assertion Failed:  ${actual}   !==   ${expected}`);
    }
  };


const middle = function(array){
    let middleElement = [];
    if (array.length % 2 === 0){
        let middle = (array.length) / 2
        middleElement = [array[middle - 1],array[middle]]
    } else{
        middleElement = array[Math.floor(array.length/ 2 )]
    }
    
    
    return middleElement;  
   
}

assertArraysEqual(middle([7,8,9,1]), [8,9])
assertArraysEqual(middle(["a", "b", "c", "d", "e"]), ["c"])