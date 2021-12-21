// FIND DUPLICATE(S) challenge
// Problem: spot duplicate(s) value in an array.
// Solution: Implement an algorithm that finds duplicate value(s) in an array.



// SOLUTION IN PSEUDOCODE

// - Define an array to search through.
// - Identify helpful array methods.
// - Bake a function that'll take an Array as an input and return duplicate number(s).




// CODING SOLUTION - super simple solution using the help of a filter() method
// Returns an array with all the numbers that pass the duplicacy test
// If no elements pass the test it returns an emprty array

const numbers = [3, 1, 1, 3];
let hasDuplicate = numbers.filter((number, index) => numbers.indexOf(number) !== index);
console.log(hasDuplicate); // [ 1, 3 ]




// CODING SOLUTION - using the help of Math.abs() method
// Returns ONLY the first duplicate it spots

const elements = [3, 1, 1, 3];
const elementsLength = elements.length;

function findDuplicate(elements, elementsLength) {
    let duplicateElement = 0;

    for (let i = 0; i < elementsLength; i++) {

        let element = elements[Math.abs(elements[i])];
        // console.log('element ' + element);

        if (element < 0) {
            duplicateElement = elements[i];
            break;
        }

        elements[Math.abs(elements[i])] = -elements[Math.abs(elements[i])];
        // console.log('element value ' + elements[Math.abs(elements[i])]);
    }

    return Math.abs(duplicateElement);

}

console.log('Duplicate has been found and it has a value of ' + findDuplicate(elements, elementsLength));
