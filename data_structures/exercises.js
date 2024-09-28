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

// now i know why, i was putting 
// i++ to place of i <= end
// in short places of these two were reversed


console.log(myRangeFunction(2, 2, 54))
// My range function is now more advanced




// REVERSING ARRAY

function reverseArray(givenArray){
    // this function takes an array 
    // and returns reversed array which contains values of [givenArray]
    
    lengthOfArray = givenArray.length
    
    result = []

    for(i = lengthOfArray - 1; i >= 0; i--){
        result.push(givenArray[i])
    }

    return result
}

console.log(reverseArray([4,3,2,5,3,2]))

console.log(reverseArray([49983, 838, 88, 9, 83, 993, 8829, 82898, 829, 88, 89839,843892]))



function reverseArrayInPlace(givenArray){
    givenArray.reverse()
}

someArray = [3, 5, 0, 9, 9, 87]

console.log(someArray)

reverseArrayInPlace(someArray)

console.log(someArray)

// i thought there is no need to recrease Array.prototype.reverse()
// method, in other word i left it to do it maybe later