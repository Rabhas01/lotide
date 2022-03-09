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
assertArraysEqual([1,2,3],[1,2,3])
assertArraysEqual([1,2,3],[3,2,1,])