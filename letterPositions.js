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
const letterPositions = function(sentence) {
    const jointStrng = sentence.split(' ').join('');
    const results = {};

    for(let i = 0; i < jointStrng.length; i++){ 
        
        //if(!results[jointStrng[i]]) results[jointStrng[i]] = []; // if the chrt is not in the object 
        if(typeof(results[jointStrng[i]]) === Array){
            results[jointStrng[i]].push(i)
        }else{ 
            results[jointStrng[i]] = []
            results[jointStrng[i]].push(i)
        }
    }
    return results;
  };

 let result = letterPositions("hello");
 assertArraysEqual(result["e"], [1]);