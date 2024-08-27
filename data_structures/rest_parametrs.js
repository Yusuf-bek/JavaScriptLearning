// building max funtion

function findMax(...numbers){
    // function takes as many parametrs as possible
    // because three dots used (...numbers)
    let result = -Infinity

    // to find max of given numbers
    // we should start comparing from the smallest number

    // -Infinity is lesser than any number

    for(let number of numbers){
        if(number > result) {
            // when number is greater than result
            // we give its value to result
            result = number
        }
    }

    return result
}


console.log(findMax(3, 4, 5, -2, 4, 323, 4,))

// building min function

function findMin(...numbers){
    // function takes as much parametrs as given
    // because ...numbers used

    let result = Infinity
    // to find smallest or minimum of given 
    // numbers we start comparing from Infinity

    // which is bigger than any number given

    for(number of numbers){
        if(number < result) result = number
    }

    return result
}


console.log(findMin(3, 4, 3, 2, 3, 2, 2, 2, 4 ,2, 45 ,2 ,4,4, 2, 4,2, 3, 4,23, 3 ,43, 2 ,4, 5, 6, 5, -3, 3))




console.log(findMin(Infinity, "string", 3, 5, 233))
// => 3


console.log(Number("1"))
// => 1

console.log(Number("adfadflajsdflkj"))
// => NaN 
// Not a Number


console.log(typeof NaN)
// => number

console.log(typeof 28383)
// => number

console.log(typeof "34884")
// => string

console.log(typeof Number("someStringIs"))
// => number

console.log(typeof Number("383888327"))
// => number


let someArray = [3, 4, 3, 5, 7, 2, 95, 10]

console.log(findMin(...someArray))
// => 2

// three dots spreads out the array to single elements

console.log(findMax(328, ...someArray, 3, 6556))
// and it is ok to add elements before and after it
// seeing it as ...someArray = (elements in array => a, b, c, d)


// ... also works to {} type of datastructures

let coorodinates = {x: 3, y: 453, z: 3}

console.log({x:11,...coorodinates, h: 222})
// => { x: 3, y: 453, z: 3, h: 222 }
// x value is 3, not 11
// because last declaration/change of value 
// would be taken

console.log({s:22, s:3})
// => s:3
