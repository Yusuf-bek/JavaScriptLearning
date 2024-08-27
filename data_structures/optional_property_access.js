// from book: Eloquent Javascript, 4th edition
// "When you aren’t sure whether a given value produces an object but still want to
// read a property from it when it does, you can use a variant of the dot notation:
// object?.property."

function city(object) {
    // if we do not use ?. here
    // we would get this type of error:
    // TypeError: Cannot read properties of undefined (reading 'city')
    // 
    // so we use ?. when we are unsure 
    // weather there is expected property 
    // exists or not
    return object.address?.city;
}

console.log(city({address: {city: "Toronto"}}));
// → Toronto

console.log(city({name: "Vera"}));
// → undefined


// there is similar way of approach 
// in Dart programming language

// similar nottation can be used to function calls 
// putting ?. in front of parentheses or brackets 

console.log("ADSLFJ".notAMethod?.())
// => undefined

console.log({}.arrayProp?.[0])
// => undefined