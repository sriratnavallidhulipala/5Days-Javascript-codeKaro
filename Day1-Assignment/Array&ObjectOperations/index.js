// Assignment 3: Array of Objects Operations
// Objective: Practice adding, removing, and updating values in an array of objects.

// 1. Create an empty array called "cars".
let cars = [];
console.log("Create an empty array=", cars);
// 2. Add three car objects to the "cars" array. Each car object should have the following properties:
//    - make: "Toyota"
//    - model: "Camry"
//    - year: 2018
cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018,
});
cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018,
});
cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018,
});
console.log("Add three car objects to the cars array=", cars);

// 3. Remove the first car object from the "cars" array.
cars.shift();
console.log("Remove the first car object from the cars array=", cars);
// 4. Add a new car object to the "cars" array with the following properties:
//    - make: "Honda"
//    - model: "Civic"
//    - year: 2020
cars.push({
  make: "Honda",
  model: "Civic",
  year: 2020,
});
console.log("Add a new car object to the cars array=", cars);
// 5. Update the "model" property of the second car object in the array to "Accord".
if (cars.length >= 2) {
  cars[1].model = "Accord";
}
console.log("Update the model property of the second car object in the array=",cars);
// 6. Print the final "cars" array after performing the above operations.
console.log("final cars array=", cars);
// Remember to use console.log() to print the arrays and objects in the console to see the results of each operation.
