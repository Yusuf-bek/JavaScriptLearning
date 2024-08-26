let toDoList = [4, 5, 5, 3, 5, 2, 9, 7]

function removeTaskFromEnd(){
    // .pop() function will 
    // remove element from end
    toDoList.pop()
}

function addTaskToEnd(task){
    // .push() function
    // adds element to end of array
    toDoList.push(task)
}

function removeFirstElemntOfArray(){
    // removes element from first
    toDoList.shift()
}

function addElementToFront(task){
    // adds element to front of array
    toDoList.unshift(task)
}



console.log(toDoList)
removeFirstElemntOfArray()
console.log(toDoList)

removeTaskFromEnd()
console.log(toDoList)

addTaskToEnd(45)
console.log(toDoList)

addElementToFront(38384884)
console.log(toDoList)


console.log(toDoList.indexOf(5))
// indexOf returns index of element in array
// which its value equal to given value

// => 1

console.log(toDoList.indexOf(483))
// if there is no such element 
// which its value = givenValue
// it will reutrn:
// => -1


console.log(toDoList.lastIndexOf(5))
// => 4

// lastIndexOf returns index of 
// element which equals to given value

// difference between indexOf and lastIndexOf 
// is indexOf starts from beginning of array

// lastIndexOf starts from end of array

// basically both do the same thing but 
// one searches from start => end
// next one from end => start 
// of an array


console.log(toDoList.lastIndexOf(48382))
// => -1

// because there is no such element in given array
// which value equals to 48382


someArray = [9, 4, 5, 3, 5, 3, 5, 6, 18]



console.log(someArray.slice(0,8))

// slice will take two indexes
// and it will take part of array between
// firstGivenIndex and secondGivenIndex (secondGivenIndex is not included)


console.log(someArray.slice(3,5))
// => elements between element(index = 3) and element(index = 5)[this element is not included]


// Concat method

// this method append two array to each other


myNewArray1 = [3, 4, 5, 2]
myNewArray2 = [5, 53, 3, 5]



console.log("myNewArray1: ",myNewArray1)
console.log("myNewArray2: ",myNewArray2)
console.log("array which made by sum of two arrays on top: ",myNewArray1.concat(myNewArray2))



////////////


function removeNthElement(array, index){
    return array.slice(0, index).concat(array.slice(index + 1))
}

console.log(removeNthElement([38, 38, 9, 4, 22, 84, 883, 12, 28, 90, 70], 5))
// this will return array without 84 as it is 5th element of array

// in programming we count from 0 
// in real life we count from 1 