// Challenge: Print Fizz if number is divisible by 3, print Buzz if it's divisible by 5 and otherwise print "i".
// Problem: Can an arbitrary number (integer) be divide by 3 and/or 5?
// Solution: Implement a function that uses modulo operator to find out if an integer we pass as an argument is divisible by 3 and/or 5.



// SOLUTION IN PSEUDOCODE

// - Define a const that holds a number (integer).
// - Use modulo operator to support the case.
// - Bake a function that'll take an integer as an input and Print Fizz if number is divisible by 3, print Buzz if it's divisible by 5 and otherwise print "i".




// CODING SOLUTION

function fizzBuZZ(someNum){
    if(Number(someNum) % 3 == 0){
        console.log('Fizz');
    }
    if(Number(someNum) % 5 == 0){
        console.log('Buzz');
        return;
    }
    console.log("i");
}

const numero = 30;
fizzBuZZ(numero);