function calculateThis(x){
    // this function requires one, x as argument
    return x + 45
}

console.log(calculateThis(3, 6, 6))

// In Javascript when we give extra arguments, it will ignore extra ones and 
// takes first one as valid argument



// in vice versa way
function otherCase(d, g, y, oneMore){
    console.log(d)
    console.log(g)
    console.log(y)
    console.log(oneMore)
}

otherCase("First one", "Second One", "Third one",)

// when we give less arguments than expected, JavaScript gives undefined value
// to other arguments


function minus(a, b){
    if(b == undefined) return -a
    else return a - b
}

console.log(minus(3))
// => -3

console.log(minus(393, 193))
// => 200



