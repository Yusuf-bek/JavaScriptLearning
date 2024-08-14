let someData = {first: 2003, second: 19918}

console.log(someData.first)
// => 2003 

delete someData.first
// someData.first = undefined

// difference between deleting property and giving it value of undefined
// is when you delete property is no longer in that object
// in other case, property is still there, you can use it again and give it new value


console.log(someData.first)
// => undefined

console.log("second" in someData)
// => true

console.log("third" in someData)
// => false



console.log(Object.keys(someData))
// this will give you keys in someData

console.log(Object.values(someData))
// this will give values in someData

Object.assign(someData,{"third": 3838383})

console.log("third" in someData)

Object.assign(someData, {fourth: "flutflu"})

console.log(Object.keys(someData))

console.log(typeof someData["third"])

console.log(typeof someData.second)


let myDays = [
    {
        day: "August 8",
        events: ["write code", "sleep", "eat", "wash hands", "pray salah"],
        isMarried: false
    },
    {
        day: "someDay",
        events: ['eat', "sleep", `pray`],
        isMarried: false
    },
    {
        day: "I do not know, this is some day",
        events: ['eat', 'sleep', 'workout'],
        isMarried: false
    }

]



let firsObject = {first: 12}
let secondObject = firsObject
let thirdObject = {first: 12}

console.log(firsObject == thirdObject)
// => false

console.log(firsObject == secondObject)
// => true

firsObject.first = 13
console.log(firsObject)
// => 13
console.log(secondObject)
// => 13

// so firstObject and secondObject are binded so same value in memory




console.log("//////////////////////////////////")

const someObject = {'this': 3}
let otherObject = someObject

Object.assign(someObject, {"bu": 2003})

console.log(someObject)
console.log(otherObject)

// someObject = {neww: "value"}
// => TypeError: Assignment to constant variable.

otherObject = {"hellowMellow": 3848}

// when someObject is constant you can still assign new values and keys to it
// or edit them. But you cannot bind them new value from scratch (look line 96, 97)

console.log("///////////////////////////////////")
otherObject = {"hellowMellow": 3848}
console.log(someObject)
console.log(otherObject)

// But as otherObject is (let) so we can rebind new value to it


//////////////////////////////////////////



journal = []

journal.push(['this is good', 'great way of dealing with '])

console.log(journal)


