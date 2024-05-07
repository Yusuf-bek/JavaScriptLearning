console.log("Should be false: ",3 <= 4);
// => true

console.log("NotFalse: ", 5 >= 5);
// => true

console.log("In javascript NaN is not equal to NaN: ", NaN == NaN);
// => false

console.log("\n\nLogical Operators: \n");

console.log("&&(and)");

console.log("true && true: ",true && true);
// => true 

console.log("true && false",true && false);
// => false

console.log("false && true",false && true);
// => false

console.log("false && false",false && false,'\n');
// => false

console.log('|| (or)');

console.log('false || false : ',false || false);
console.log("false || true :",false || true);
console.log('true || false :',true || false);
console.log("true || true :", true || true);


console.log("! (not)");
// not just flips boolean value

console.log(!false);
// => true

console.log(!true);
// => false


// interesting
console.log(!NaN);
// not operator flipping NaN into true


/// Ternary Operator otherwise LittleIfElse

console.log(true ? "To'g'ri" : "Noto'g'ri");
// => To'g'ri

console.log(false ? "Sherigim print bo'ladi :)" : "Ha ha ha meni davrim keldi");
// => Ha ha ha meni davrim keldi

console.log(true ? "Men print bo'laman :)" : "Mayli sherik ishlarga omad");
// => Men print bo'laman :)