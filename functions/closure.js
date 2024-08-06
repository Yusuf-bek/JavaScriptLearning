function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
// → 1

console.log(wrap2());
// → 2

// Closure is ability to treat functions as values


function calculateBornYear(currentYear){
    return myAge => currentYear - myAge
}

let calculateBornYearMyAgeFunction = calculateBornYear(2024)
// Here we using Closure
// and here currentYear is stored to this binding as 2024

console.log(calculateBornYearMyAgeFunction(21))
// => 2003

console.log(calculateBornYearMyAgeFunction(90))
// => 1934