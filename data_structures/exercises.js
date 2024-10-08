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


// LIST

console.log(">>>>>>>>>>>>>>>>>>>>>>>>\n")

console.log(arrayToList([3, 0, 9, 8, 2, 7, 4]))

console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>\n")

console.log(listToArray(arrayToList([3,5,3,2,89,788,8988,8,6,45,34,12,11,89])))

console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>\n")

console.log(prepend(arrayToList([3,4,2,1]), 11111))

console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>\n")

console.log(nThElementOfList(arrayToList([4,2,454,2,21]), 78))
//=> undefined

console.log(nThElementOfList(arrayToList([4,2,454,2,21]), '21'))
//=> undefined

console.log(nThElementOfList(arrayToList([4,2,454,2,21]), 21))
//=> 4

console.log(nThElementOfListRecursiveVersion(arrayToList([4,2,1,4,55,35,266,98]), 266))
//=> 6


// List structure
//
// let list = {
//     value: 1,
//     rest: {
//         value: 8,
//         rest: {
//             value: 3,
//             rest: {
//                 value: 54,
//                 rest: {
//                     value: 34,
//                     rest: null
//                 }
//             }
//         }
//     }
// }


function arrayToList(givenArray, indexCount = 0){
    // Function that creates list out of 
    // array that is given to it

    return {
        value: givenArray[indexCount],
        rest: (indexCount == (givenArray.length)) ? null : arrayToList(givenArray, indexCount + 1)
    }
}


function listToArray(givenList, newArray = []){
    // Function that creates array 
    // out of list

    if(givenList.rest != null){
        newArray.push(givenList.value)
        listToArray(givenList.rest, newArray)
    }

    return newArray
}


function prepend(givenList, element){

    // this is helper function which
    // and adds element to front of list

    return {
        value: element,
        rest: givenList
    }

}


function nThElementOfList(givenList, element){

    // takes list and element
    // and returns index of given element in givenList

    // if there is no such element in list, then it
    // will return undefined

    let resultList = givenList
    let countIndex = 0
 

    while(resultList.rest != null){

        if(resultList.value === element){
            return countIndex
        }

        resultList = resultList.rest
        countIndex++

    }

    return undefined
}


function nThElementOfListRecursiveVersion(givenList, element, indexCount = 0){
    // this works same as nThElementOfList 
    // but this function is written using recursive function

    if(givenList.value === element){
        return indexCount
    }
    else if(givenList.rest === null){
        return undefined
    }

    return nThElementOfListRecursiveVersion(givenList.rest, element, indexCount + 1)

}
