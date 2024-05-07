// This program finds factorial of given number

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else { 
        return factorial(n - 1) * n; 
    }
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Write number that you wanna know factorial of: ", number => {
    console.log(`Here it is ${factorial(number)}`);
    readline.close();
});

