// Scope
let globalMessage = "Global";

function scopeExample() {
    let localMessage = "Local";
    console.log("Inside function:", globalMessage);
    console.log("Inside function:", localMessage);
}

scopeExample();


// Closure
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increase = counter();

console.log("\nClosure:");
console.log(increase());
console.log(increase());
console.log(increase());


// Hoisting
console.log("\nHoisting:");
sayHello();

function sayHello() {
    console.log("Hello from a hoisted function.");
}


// Callback
function processEmployee(name, callback) {
    console.log("\nCallback:");
    callback(name);
}

processEmployee("Rahul", function (name) {
    console.log(`Processing employee: ${name}`);
});


// Promise
function getEmployee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Employee data received");
        }, 1000);
    });
}

console.log("\nPromise:");

getEmployee()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log("Error:", error);
    });


// Async / Await
async function fetchEmployee() {
    try {
        const message = await getEmployee();
        console.log("\nAsync/Await:");
        console.log(message);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchEmployee();


// Event Loop
console.log("\nEvent Loop:");

console.log("1. Start");

setTimeout(() => {
    console.log("3. setTimeout");
}, 0);

console.log("2. End");