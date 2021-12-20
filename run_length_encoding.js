// Challenge: Run Length Encoding on a String.
// Problem: count and record the occurance of a single character.
// Solution: Implement a function that takes a String as an input and records the number of character repetitions.
// Output: aaabbcc -> a3b2c2



// SOLUTION IN PSEUDOCODE

// - Define a String to be processed.
// - Use a for loop to record the number of occurances of each single character. 
// - Bake a function that'll take a String as an input and record a repetition pattern.



// CODING SOLUTION

function runLengthEncoding(str) {
    var rleString = '';
    if (str.length > 0) {
        var counter = 1;
        var character = str[0];
        for (var i = 1; i < str.length; ++i) {
            var nextChar = str[i];
            if (nextChar == character) {
                counter += 1;
            } else {
                rleString += character + '' + counter;
                character = nextChar;
                counter = 1;
            }
        }
        rleString += nextChar + '' + counter;

    }
    return rleString;
}


var str = 'aaabbcc';
var rle = runLengthEncoding(str);

console.log(rle); // "a3b2c2"