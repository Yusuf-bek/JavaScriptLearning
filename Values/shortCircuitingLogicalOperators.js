// (||), (??), (&&)

// || operator 

console.log("|| operator: ")

console.log('' || "Men print bo'laman!")
// => Men print bo'laman

console.log(0 || "Yana men")
// => Yana men

console.log("Ha ha ha" || "Yo'o'q")
// => Ha ha ha

// (||) will convert leftValue to Boolean and if leftValue equals 
// to null it will return rightValue
// if not it will return leftValue

console.log(0 || 0)
// => 0

console.log(null || null)
// => null

// rightHandValue's value does not matter, it will be printed if 
// leftHandValue does not

// it like saying operator (||) is giving tough requirement to leftHandValue


console.log("")


// ?? Operator

console.log("?? operator:")

console.log(null ?? null)
// => null

console.log()

// ?? operator is little bit different than || 
// it does check for eaither leftSideValue is null or not

// if it is null, not matter what rightSideValue is it will be returned
// if leftSideValue is not null, so it will be returned

console.log(3 ?? null)
// => 3

console.log(5 ?? 4)
// => 5

console.log(null ?? "finally")
// => finally

console.log(undefined ?? 'me')
// => me


// && operator

console.log("&& operator")

console.log()

console.log(false && "flflflf")
// => false

console.log("" && 38483)
// => ""

console.log(3 && false)
// => false

console.log(8 && "nimadurla")
// => nimadurla

// && operator works other way around
// it returns leftSide value if only it is false after conversion to Boolean value
// if leftside value converts to true then it will return rightSide value


// Important

// "", null, undefined, NaN, false, 0 
// these are values that become false after conversion to Boolean


