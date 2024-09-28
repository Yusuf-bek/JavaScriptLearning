// THE SUM OF A RANGE

function myRangeFunction(start, end, step = 1){
    // function takes two required parametrs to run

    // start and end
    // then it generates numbers between them by adding
    // them to an array [result]

    // also you can give this function steps 
    // default step equals to 1
    // if you give 'n' number to step then function will
    // step forward by 'n' while generating numbers 

    result = []

    if(start < end){
    while(start <= end){
        result.push(start)
        start += step
    }}
    else if(start == end){
        return start
    }
    else if(start > end){
        while(end <= start){
            result.push(start)
            start-=step
        }
    }

    return result
}

console.log(myRangeFunction(1, 100, 2))



function mySumFunction(someArray){
    // This function takes an array
    // then adds all of its elements and returns it

    result = 0

    for(element of someArray){
        result += element    
    }

    return result
}

console.log(mySumFunction(myRangeFunction(1, 10)))





// INTERESTING CASE
//
// It is not stopping with for loop
// myRangeFunction is generating 
// infinity numbers when for loop is used
// i do not know why

// function myRangeFunction(start, end){
//     result = []

//     for(i = start; i++; i <= end){
//         result.push(i)
//         console.log(i)
//     }

//     return result

// }

// console.log(myRangeFunction(1, 19))


console.log(myRangeFunction(2, 2, 54))