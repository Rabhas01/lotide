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


module.exports = middle;
