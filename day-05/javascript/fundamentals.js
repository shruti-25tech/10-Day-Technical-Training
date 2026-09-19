// JavaScript Fundamentals

// let and const
let age = 20;
const name = "Employee";

console.log("Name:", name);
console.log("Age:", age);


// Data types
let employeeName = "Rahul";     // String
let employeeAge = 25;           // Number
let isActive = true;            // Boolean
let salary = null;              // Null
let address;                    // Undefined

console.log("\nData Types:");
console.log(typeof employeeName);
console.log(typeof employeeAge);
console.log(typeof isActive);
console.log(typeof salary);
console.log(typeof address);


// Function
function greetEmployee(name) {
    return `Hello, ${name}!`;
}

console.log("\nFunction:");
console.log(greetEmployee("Rahul"));


// Arrow function
const add = (a, b) => a + b;

console.log("\nArrow Function:");
console.log(add(10, 20));


// Arrays
const skills = ["Python", "SQL", "JavaScript"];

console.log("\nArray:");
console.log(skills);


// Objects
const employee = {
    name: "Rahul",
    age: 25,
    department: "IT"
};

console.log("\nObject:");
console.log(employee);


// Destructuring
const { name: empName, department } = employee;

console.log("\nDestructuring:");
console.log(empName);
console.log(department);


// Spread operator
const moreSkills = [...skills, "AWS"];

console.log("\nSpread Operator:");
console.log(moreSkills);


// Rest operator
function calculateTotal(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log("\nRest Operator:");
console.log(calculateTotal(10, 20, 30));


// Template literals
console.log(`\n${empName} works in the ${department} department.`);