
function nameIsName(){
    console.log("hello")
}

nameIsName()
// => hey

// as you see, here is also => hey
// because JavaScript firstly declares functions
// then looks at other codes

function nameIsName(){
    console.log("hey")
}

nameIsName()
// => hey

nameIsName()
// => hey

// second declaration of nameIsName function
// is overriding the first one



function max(){
    console.log("this is fake version of max")
}

console.log(Math.max(3,5,3,2,2,4,2,2,4,2,))

// you do not have to worry about overwriting 
// max function because 
// it is inside of Math
// Math.max


// you cannot redeclare bindings 
// which are declared with let, const


// you can redeclare bindings which are 
// declared with var, function


console.log(Math.random())
// returns random number between 0 (inclusive )=> 1 (exclusive)



function randomPointOnCircle(radius){
    // this function takes radius of a circle
    // and shows random point on circle

    let angle = Math.random() * 2 * Math.PI

    return {
        x: radius * Math.cos(angle), 
        y: radius * Math.sin(angle)

    }
}

console.log(randomPointOnCircle(34))


console.log(Math.floor(1.343))
// => 1

console.log(Math.floor(-12.0003))
// => -13

console.log(Math.floor(1.34353))
// => 1

console.log(Math.floor(59.3210000354))
// => 59

console.log(Math.floor(30.343))
// => 30

console.log(Math.floor(-71.343))
// => -72

// Math.floor returns greatest integer
// which is equal or less than to its numeric value


// random numbers between 0 to 9

console.log(Math.floor(Math.random() * 10))
// => 0 => 9 (any number between them)

// Math.abs() returns absolute value of number

console.log(Math.abs(338))
// => 338

console.log(Math.abs(-8))
// => 8

console.log(Math.abs(0.45665))
// => 0.45665

console.log(Math.abs(3.4323))
// => 3.4323

console.log(Math.abs(-3.4323))
// => 3.4323

// more specifically Math.abs negates negatvity of number
// and it returns positive number as it is 



// Math.ceil

// it is opposite of floor

console.log("Math.ceil:",Math.ceil(3.5543))
// returns smallest integer which is 
// greater than or equal to its numeric value

// more specifically ceil trys to make number 
// bigger or equal to its numeric value

// ceil: (a.adfljkha) number should
// be equal to its numeric value (a) or (a+1)


console.log("Math.floor:",Math.floor(3.5543))
// returns greatest integer which is equal 
// or less than its numeric value

// more specifically floor trys to make number less 
// or equal to its numeric value

// floor: (a.adfljan) number should be 
// equal to its numeric value (a) or (a - 1)


// *numeric value
// 3.535 => numericValue => 3
// -35.393 => numericValue => -35



// Math.round 

console.log("Math.round:",Math.round(3.500))
// => 4

console.log("Math.round:",Math.round(3.499))
// => 3

// Math.round, rounds given number
// to its nearest integer
