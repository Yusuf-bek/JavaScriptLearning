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


