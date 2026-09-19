import { add, multiply } from "./math.js";

console.log("Add:", add(10, 5));
console.log("Multiply:", multiply(10, 5));

try {
    const number = 10;
    
    if (number < 0) {
        throw new Error("Number cannot be negative.");
    }

    console.log("Error handling: Number is valid.");
} catch (error) {
    console.log("Error:", error.message);
}