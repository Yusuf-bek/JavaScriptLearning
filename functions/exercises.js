// Minimum
function minimum(a,b){
    if(a>b) return b
    return a
}

console.log("Minimum: ", minimum(34,55))
// => 34

// 1) Even or Odd (Recursion)

function isEven(naturalNumber){
    if(naturalNumber == 0){
        return true
    } else if(naturalNumber == 1){
        return false
    } else if(naturalNumber < 0){
        return isEven(-naturalNumber)
    }
    return isEven(naturalNumber - 2)
}
// It is not good approach for bigger numbers

console.log("isEven: ",isEven(-415))


// 2) approach (without recursion)

function isOdd(naturalNumber){
    if(naturalNumber < 0){
        return isOdd(-naturalNumber)
    }

    while(naturalNumber > 1){
        naturalNumber -= 2
    }

    if(naturalNumber == 1){
        return true
    } 
    else if(naturalNumber == 0){
        return false
    }
    
}
// it is not good approach for bigger numbers
// but better than first approach

console.log("isOdd: ",isOdd(-455489.5))


// Third approach 

function isItOdd(naturalNumber){
    if(naturalNumber % 2 == 1){
        return true
    } else if(naturalNumber % 2 == 0){
        return false
    }
    // in other cases number would not be natural like (-n or a.b)
    // then function will return undefined by default
}

console.log("isItOdd: ",isItOdd(38828399283913211323))

// This is best approach among three of them


// Count "B"s in String

function countChar(anyString, char){

    stringLength = anyString.length
    counter = 0;
    for(a = 0; a < stringLength; a++){
        if(anyString[a] == char){
            counter++
        }
    }  
    
    return counter
}


console.log(countChar("ThBfldsajalkdfBng", "r"))
// => 0