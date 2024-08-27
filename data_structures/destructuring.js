function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}

// as this function is little bit akward to read

// we can use [] square brackets to look inside of an array

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
    (n01 + n11) * (n00 + n10));
}


// this also works for bindings created 
// with let, var and const

let {name} = {name: "Ogabek", age: 21, surename: "Sherakhmatov"}

console.log(name)

let {age} =  {name: "Ogabek", age: 21, surename: "Sherakhmatov"}

console.log(age)


// from book: Eloquent Javascript, 4th edition
//
// Note that if you try to destructure null or undefined, you get an error, much
// as you would if you directly try to access a property of those values.

let {whaleName} = {name: "Orca", size: "Very big", type: "very agressive and ruthless"}

console.log(whaleName)
// => undefined

