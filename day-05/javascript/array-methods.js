const employees = [
    { name: "Rahul", department: "IT", salary: 50000 },
    { name: "Priya", department: "HR", salary: 45000 },
    { name: "Amit", department: "IT", salary: 60000 },
    { name: "Sneha", department: "Finance", salary: 55000 }
];

// map - create a new array
const names = employees.map(employee => employee.name);
console.log("map:", names);

// filter - select matching items
const itEmployees = employees.filter(
    employee => employee.department === "IT"
);
console.log("filter:", itEmployees);

// reduce - calculate a single value
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log("reduce:", totalSalary);

// find - find the first matching item
const employee = employees.find(
    employee => employee.name === "Amit"
);
console.log("find:", employee);

// some - check if at least one item matches
const hasHighSalary = employees.some(
    employee => employee.salary > 55000
);
console.log("some:", hasHighSalary);

// every - check if all items match
const allHaveSalary = employees.every(
    employee => employee.salary > 40000
);
console.log("every:", allHaveSalary);

// sort - sort by salary
const sortedEmployees = [...employees].sort(
    (a, b) => a.salary - b.salary
);
console.log("sort:", sortedEmployees);