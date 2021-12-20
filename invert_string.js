// INVERT STRING challenge
// Problem: Take a string and invert it.
// Solution: Implement an algorithm that inverts a string (e.g. "YoUr Name" > "yOuR nAME").



// SOLUTION IN PSEUDOCODE

// - Define a string to be inverted.
// - Identify helpful String and/or Character manipulation methods.
// - Bake a function that'll take a String as an input and invert it.




// CODING SOLUTION


function invertString(str) {
    let strLength = str.length;
    let invertedString = [];

    for (let i = 0; i < strLength; i++) {

        if (str[i] >= "A" && str[i] <= "Z")
            // console.log(str[i] + " is an UpperCase character");
            invertedString[i] = str[i].toLowerCase();
        else if (str[i] >= "a" && str[i] <= "z")
            // console.log(str[i] + " is a LowerCase character");
            invertedString[i] = str[i].toUpperCase();
        else if (str[i] === " ") {
           // console.log(str[i] + " is a space character");
           invertedString[i] = " ";
        } else {
            // console.log(str[i] + " is not an aplhabetic character");
            continue;
        }
    }

    console.log(invertedString.join("")); // yOuR nAME

}


var str = "YoUr Name";

invertString(str);