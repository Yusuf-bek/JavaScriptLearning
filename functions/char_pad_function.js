// Given number n and function should add any characters
// before it with given width

function charPad(givenNumber, width, character){
    givenNumberString = String(givenNumber)

    while(givenNumberString.length <= width){
        givenNumberString = character + givenNumberString
    }

    return givenNumberString
}

console.log(charPad(3, 5, "$"))
// $$$$$3