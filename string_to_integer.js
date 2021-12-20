// Challenge: convert a String to an Integer.
// Problem: non numeric chracters should throw an error.
// Solution: Implement a function that takes a "numerical String" as an input and converts it to an Integer;  otherwise throw an error.



// SOLUTION IN PSEUDOCODE

// - Define a String to be converted to an Integer value.
// - Identify helpful String checking/matching methods. 
// - Bake a function that'll convert a String to an Integer or throw an error if non numerical character found.



// CODING SOLUTION USING match(regex) METHOD
// Any non numerical character at any position will make code throw an error

function stringToInteger(str) {

    if (str.match("^[0-9]+$")) {
        console.log(str);
    } else {
        throw 'Parameter is not a number!';
    }
}

try {
    stringToInteger('88 # !17');
} catch (e) {
    console.log(e); // Parameter is not a number!
}



// CODING SOLUTION using isNaN() METHOD
// any non numerical character(s) at the begining of String will throw an error
// otherwise, code will NOT throw an error if non numerical characters found elswhere in the String

function strToInteger(str) {

    if (isNaN(parseInt(str))) {
        throw 'Parameter is not a number!';
    } else {
        console.log(parseInt(str));
    }
}

try {
    strToInteger('88 # !17');
} catch (e) {
    console.log(e); // 88
}