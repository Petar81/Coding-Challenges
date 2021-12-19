// REVERSE STRING challenge
// Problem: Take a string and reverse it.
// Solution: Implement an algorithm that reverses a string (e.g. "yourName > "emaNruoy") - sort of a mirror effect.



// SOLUTION IN PSEUDOCODE

// - Define a string to be reversed.
// - Identify helpful String and/or Character manipulation methods.
// - Bake a function that'll take a String as an input and reverse it.





// CODING SOLUTION 

var yourName = "yourName";

function reverseString(name){
    let reversedName = [];
    var name = name.split("");
    const nameLength = name.length;

    for (let i = nameLength -1 ; i >= 0; i--){
        //console.log(name[i]);
        for (let j = 0 ; j < nameLength; j++){
            reversedName.push(name[i]);
            break;
        }
    }
    console.log(reversedName.join("")); // emaNruoy
}

reverseString(yourName);
