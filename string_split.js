// String Split challenge
// Problem: You have a long string over some alphabet and a large dictionary of words over the same alphabet.
// Solution: Suggets an algorithm to split the String into words from the dictionary; if possible print the String with spaces accordingly. If not possible, return FALSE.


// SOLUTION IN PSEUDOCODE

// - Define a long String.
// - Define an array of words.
// - Identify helpful String and Array methods/regular expressions for this particular case.
// - Bake a function that'll take a String as an input & return a String of matched words on success or return false if no words matched.




// CODING SOLUTION USING REGEX 

var longStrng = "howdoyoudohellomyfriendit'sbeenalongtime since notalkIhavebeenworkingheresincelastsixmonthstillnewyear";

function matchStringToWords(myString) {
    if (myString.match(/since|till|until/ig)) {
        console.log(myString.match(/since|till|until/ig).join(", "));
    } else {
        return false;
    }
}

matchStringToWords(longStrng); // "since, since, till"




// CODING SOLUTION USING FOR-LOOP & INDEXOF METHOD *** (NOTE: IT RETURNS ONLY THE FIRST OCCURANCE OF A WORD IN A STRING)

var longStrng = "howdoyoudohellomyfriendit'sbeenalongtime since notalkIhavebeenworkingheresincelastsixmonthstillnewyear";
var dictionary = ["since", "till", "until"];

function findWordsInString(someString) {
    let words = []; // array of matching words
    for (var i = 0; i <= dictionary.length; i++) {
        if (someString.indexOf(dictionary[i]) != -1)
            words.push(dictionary[i]);
    }
    if (words.length > 0) {
        console.log(words.join(", "));
    } else {
        return false;
    }
}

findWordsInString(longStrng); // "since, till"

     
