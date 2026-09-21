// Interface

interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
    email: string;
    phone?: string; // Optional property
}

// Union type

type EmployeeID = number | string;

type Status = "Active" | "Inactive";

// Employee 1

const employee1: Employee = {
    id: 1,
    name: "Rahul",
    department: "IT",
    salary: 50000,
    email: "rahul@example.com"
};

// Employee 2

const employee2: Employee = {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 45000,
    email: "priya@example.com",
    phone: "9876543210"
};

let employeeId: EmployeeID = 101;
let employeeStatus: Status = "Active";

console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
console.log("Employee ID:", employeeId);
console.log("Status:", employeeStatus);