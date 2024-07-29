const square = function(x){
    return x ** 2
}

console.log(square(2));



function thisIsSquareFunction(y){
    return y * y
}

console.log(thisIsSquareFunction(3))



function baqir(){
    console.log("Vaaaaaa!")
}

baqir()



const roundTo = function(n, step){
    // this function is to find nearest number to n
    // which is multiple of steps

    // : n = 10, step = 7
    // in this case 
    // remainder of n % 7 is 3

    // we have 2 steps which are near to 10 (7 and 14)
    // 7 is 3 number away from 10
    // 14 is 4 number away from 10

    // so nearest is 7 which is dividable with step


    // to apply this in program
    // first we need to take remainder 
    remainder = n % step

    // our function will return subratcion of remainder from n
    // (n - remainder) and (n - remainder + step)
    // our n will always be between this numbers

    // which they are both dividable by step
    // to find which one is the nearest to n

    // lets say
    // x = (n - remainder), y = (n - remainder + step)
    // and we have to find middle of these x and y

    // if our n is n < (x + y) / 2 then nearest one would be x
    // otherwise n is n > (x + y) / 2 then nearest one would be y

    // so, (x + y) / 2 equals to ((n - remainder) + (n - remainder + step))/2
    // more specifically => n - remainder + step / 2

    // result if [remainder] is smaller than half of [step] we add 0 to the return
    // otherwise add [step] to the return

    return n - remainder + (remainder < step / 2 ? 0 : step)
    // or
    // return n - remainder + (remainder > step / 2 ? step : 0)
}

console.log(roundTo(200, 3))

