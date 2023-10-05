// Assignment 1: Array Operations
// Objective: Practice adding, removing, and updating values in arrays.

// 1. Create an empty array called "fruits".
let fruits = [];
console.log("creat an empty array", fruits);

// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
fruits.push("apple", "banana", "orange");
console.log("adding the fruits to the empty array are=", fruits);

// 3. Remove the first fruit from the array.
let removedFruit = fruits.shift();
console.log("removing FIRST fruit from the array=", removedFruit);
console.log(fruits);

// 4. Add "grape" to the end of the array.
fruits.push("grape");
console.log("adding GRAPE to the end of the array=", fruits);

// 5. Update the second fruit in the array to "pear".
fruits[1] = "pear";
console.log("Update the second pear fruit in the array=", fruits);

// 6. Print the final "fruits" array after performing the above operations.
console.log("final array after all operations=", fruits);
