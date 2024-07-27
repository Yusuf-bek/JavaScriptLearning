// Looping triangle

function loopingTriangle(){
    for(i = 1; i <= 7; i++){
        console.log("#".repeat(i))
    }
}


// FizzBuzz

function fizzBuzz(){
    for(counter = 1; counter <= 100; counter++){
        if(counter % 3 == 0 && counter % 5 == 0){
            console.log("FizzBuzz")
        } 
        else if(counter % 3 == 0){
            console.log("Fizz")
        } 
        else if(counter % 5 == 0){
            console.log("Buzz")
        } 
        else{
        console.log(counter);
        }
    }
}


// Chessboard

gridSize = 7;

  for(lines = 0; lines < gridSize; lines++){
    if(lines % 2 == 0){
        console.log("# ".repeat(gridSize / 2))
    } else{
    console.log(" #".repeat(gridSize / 2))
    }
}

