// Challenge: check if a String is a Palindrome - reads the same backwards & forwards.
// Problem: find the same forwards/backwards reading pattern in one single String. 
// Solution: Implement a function that takes a String & logs Palindrome if a word reads the same backwards & forwards.



// SOLUTION IN PSEUDOCODE

// - Define a String to be checked against the algorithm.
// - Reverse an input String and save it as a local variable & then compare it with the original input String.
// - Bake a function that will take a String as an input, apply the afore mentioned algorithm & print out a reulst.




// CODING SOLUTION

function isPalindrome(str){
    let palindrome = str.split("").reverse().join("");
    
    if(str.toLowerCase() === palindrome.toLowerCase()){
     console.log(str + " is palindrome.");
    } else console.log(str + " is NOT palindrome.");
    
    }
    
    isPalindrome('Racecar'); // Racecar is palindrome (note: 1st letter is Capital but the algorithm still recognizes a palindrome).
    isPalindrome('madam'); // madam is palindrome.
    isPalindrome('11/11/11'); // 11/11/11 is palindrome (note: Dates and Numbers as Strings are recognized as palindromes as well).
    isPalindrome('jojo'); // jojo is NOT palindrome.
    isPalindrome('David'); // David is NOT palindrome.