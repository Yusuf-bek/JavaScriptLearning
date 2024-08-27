let someName = "ThisIsJustNameLikeJohn"
someName.surename = "ThisIsJustSurnameLikeAnyOther"

console.log(someName.surename)
// => undefined

// As we cannot attach new value to string
// like we attach it to {map}


// String, number and Boolean are not objects 
// thats why language does not complain when 
// you try to set new properties on them 
// it does not actually store properties

let someString = "my name is name"

someString = someString.toUpperCase()

console.log(someString)

// toUpperCase converts all alphabetic strings 
// to upper case: a => A


// toLowerCase does exact opposite of it
// A => a


// methods such as .concut, .indexOf and etc
// which they work for array also they work for string


// one difference between string's indexOf is it can search
// for multple elements and 
// array's indexOf only search for one element

myLongString = "asfdl dslf jk kk jdsf wei ns lksdf"

console.log(myLongString.indexOf("kk"))
// => 14
// here indexOf is taking "kk" as one, single elemenet
// thats why it is returning index of first 'k'

// lets try this which lastIndexOf

console.log(myLongString.lastIndexOf("kk"))
// => 14

// interestingly lastIndexOf is not working the same way as 
// it works to array

// because it is not counting from end to start when searching for index
// of given element ('kk')

// both indexOf and lastIndexOf is seeing 'kk'
// as one single element, thats why both returning 14


// methond .trim()

let otherStringToUse = "    asdfl adlfj asdfj  \n \t"

console.log(otherStringToUse)

console.log(otherStringToUse.trim())

// method trim() removes whitespaces, tabs, newlines and similar characters
// from start to end



// padStart function

console.log(String(33).padStart(3, "0"))
// => 033

// padStart fills string to given length
// with  given character to string
// from start(left) to end(right) 

console.log(String(33).padStart(5, "0"))
// => 00033

console.log(String(33).padStart(2, "0"))
// => 33

// padEnd
// does the same, but 
// it works from end(right) to start(left)

console.log(String(33).padEnd(3, "0"))
// => 330

console.log(String(33).padEnd(7, "0"))
// => 3300000


// split and join functions 

let myNameAndSureNameAndNickname = "Ogabek Sherakhmatov TheWolfOfValley"

let splittedVersion = myNameAndSureNameAndNickname.split(" ")

console.log(splittedVersion)
// =>  [ 'Ogabek', 'Sherakhmatov', 'TheWolfOfValley' ]

// split cuts string into parts by given string-character

console.log(splittedVersion.join("+"))
// => Ogabek+Sherakhmatov+TheWolfOfValley

// .join does opposite of split
// it joins array of strings with given character
// between them


// String can be repeated with .repeat() function

console.log("Ogabek".repeat(5))
// => OgabekOgabekOgabekOgabekOgabek