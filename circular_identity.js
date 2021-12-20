// CIRCULAR IDENTITY CHALLENGE
// Problem: Find out if two different Strings are circularly identical.
// Solution: Implement a function that checks if two Strings (eg. "aabbb" & "bbaab") are circularly identical.



// SOLUTION IN PSEUDOCODE

// - Define two different Strings.
// - Identify helpful String and/or Character looping/iteration mechanism(s)
// - Bake a function that'll take two different Strings as an arguments, compare one to each other & return "IDENTICAL" if the Strings consist of the same characters (but not necessarily in the same order) otherwise return "NON IDENTICAL".




// CODING SOLUTION 


function checkCircularIdentity(str1, str2) {
    const str1Length = str1.length;
    const str2Length = str2.length;
    str1 = str1.split("");
    str2 = str2.split("");
    // use nested loop to compare chars from one string to another 
    for (let i = 0; i < str1Length; i++) {
        for (let j = 0; j < str2Length; j++) {
            //check if str1 char is equal to any of str2 chars
            if (str1[i] === str2[j]) { // using .charAt() is also possible
                console.log("Character at position [" + [i] + "] in str1 has value of (" + str1[i] + ") and is equal to the str2 character at position [" + [j] + "] whose value is also (" + str2[j] + ")");
                console.log("Removing character (" + str2[j] + ") at position [" + j + "] in str2");

                // turn first matching str2 char into an empty string char to avoid its subsequent comparison
                str2[j] = '';
                console.log("The str2 now contains the following unmatched characters: " + str2);
                break;
            }
        }
    }
    // check if strings have the same length and if str2 is an empty string '', if yes - all chars matched!
    if (str1.length === str2.length && str2.join("") === '') {
        return console.log("IDENTICAL - no unmatched characters left");
    // return NON IDENTICAL if str1 is larger than str2
    } else if (str1.length > str2.length) {
        return console.log("NON IDENTICAL - str1 is larger than str2");
    // otherwise some chars in str2 are left unmatched and thus strings are not identical
    } else {
        return console.log("NON IDENTICAL - there is no match for character(s): " + str2.join(","));
    }
}

checkCircularIdentity("aabbb", "bbaab"); // IDENTICAL - no unmatched characters left
checkCircularIdentity("aab$!bb", "b!+baa%$b"); // NON IDENTICAL - there is no match for character(s): ,,+,,,,%,,
checkCircularIdentity("aa909!bb", "ba%$b"); // NON IDENTICAL - str1 is larger than str2