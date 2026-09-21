// 1. Function

function calculateAverageSalary(
    salaries: number[]
): number {

    const total = salaries.reduce(
        (sum, salary) => sum + salary,
        0
    );

    return total / salaries.length;
}

const salaries: number[] = [
    50000,
    45000,
    60000,
    55000
];

console.log(
    "Average Salary:",
    calculateAverageSalary(salaries)
);


// 2. Class

class Employee {

    constructor(
        public id: number,
        public name: string,
        public salary: number
    ) {}

    displayInfo(): void {
        console.log(
            `${this.name} earns ₹${this.salary}`
        );
    }
}

const employee = new Employee(
    1,
    "Rahul",
    50000
);

employee.displayInfo();


// 3. Generics

function getFirstItem<T>(items: T[]): T {
    return items[0];
}

console.log(
    "First employee:",
    getFirstItem(["Rahul", "Priya", "Amit"])
);

console.log(
    "First salary:",
    getFirstItem([50000, 45000, 60000])
);


// 4. Type narrowing / type guard

function displayValue(
    value: string | number
): void {

    if (typeof value === "string") {

        console.log(
            "String value:",
            value.toUpperCase()
        );

    } else {

        console.log(
            "Number value:",
            value.toFixed(2)
        );
    }
}

displayValue("Rahul");
displayValue(50000);