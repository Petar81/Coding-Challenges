// FIND DUPLICATE(S) challenge
// Problem: spot duplicate(s) value in an array.
// Solution: Implement an algorithm that finds duplicate value(s) in an array.



// SOLUTION IN PSEUDOCODE

// - Define an array to search through.
// - Identify helpful array methods.
// - Bake a function that'll take an Array as an input and return duplicate number(s).




// CODING SOLUTION - super simple solution with the help of a filter() method
// Returns an array with all the numbers that pass the duplicacy test
// If no elements pass the test it returns an emprty array

const numbers = [3, 1, 1, 3];
let hasDuplicate = numbers.filter((number, index) => numbers.indexOf(number) !== index);
console.log(hasDuplicate);
