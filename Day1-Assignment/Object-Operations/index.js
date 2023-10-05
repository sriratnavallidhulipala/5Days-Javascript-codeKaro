// Assignment 2: Object Operations
// Objective: Practice adding, removing, and updating values in objects.

// 1. Create an empty object called "person".
let person = {};
console.log("Create an empty object=", person);
// 2. Add the following properties to the "person" object:
//    - name: "John"
//    - age: 30
//    - city: "New York"
person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log("Add the following properties to the person object=", person);

// 3. Remove the "age" property from the "person" object.
delete person.age;
console.log("Remove the age property f=", person);
// 4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer";
console.log("Add a new property called job with the value Engineer=", person);
// 5. Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco";
console.log("Update the city=", person);
// 6. Print the final "person" object after performing the above operations.
console.log("final output", person);
