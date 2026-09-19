let employees = [];
let editingId = null;

// Get HTML elements
const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const sortSelect = document.getElementById("sortSelect");

const modal = document.getElementById("employeeModal");
const employeeForm = document.getElementById("employeeForm");
const formTitle = document.getElementById("formTitle");

const employeeId = document.getElementById("employeeId");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const cityInput = document.getElementById("city");


// Load employee data
async function loadEmployees() {
    try {
        const response = await fetch("employees.json");

        if (!response.ok) {
            throw new Error("Unable to load employee data.");
        }

        employees = await response.json();

        displayEmployees(employees);

    } catch (error) {
        employeeList.innerHTML = `
            <p class="no-results">${error.message}</p>
        `;
    }
}


// Display employees
function displayEmployees(data) {

    employeeList.innerHTML = "";

    if (data.length === 0) {
        employeeList.innerHTML = `
            <p class="no-results">No employees found.</p>
        `;
        return;
    }

    data.forEach(employee => {

        const card = document.createElement("div");

        card.className = "employee-card";

        card.innerHTML = `
            <h3>${employee.name}</h3>

            <p><strong>Email:</strong> ${employee.email}</p>

            <p><strong>Department:</strong> ${employee.department}</p>

            <p><strong>Salary:</strong> ₹${employee.salary}</p>

            <p><strong>City:</strong> ${employee.city}</p>

            <div class="actions">

                <button class="details-btn"
                    onclick="showDetails(${employee.id})">
                    Details
                </button>

                <button class="edit-btn"
                    onclick="editEmployee(${employee.id})">
                    Edit
                </button>

                <button class="delete-btn"
                    onclick="deleteEmployee(${employee.id})">
                    Delete
                </button>

            </div>
        `;

        employeeList.appendChild(card);
    });
}


// Search employees
function searchEmployees() {

    const searchText = searchInput.value.toLowerCase();

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchText) ||
        employee.email.toLowerCase().includes(searchText)
    );

    applyFilters(filteredEmployees);
}


// Filter and sort employees
function applyFilters(data = employees) {

    let result = [...data];

    const department = departmentFilter.value;

    // Department filter
    if (department !== "all") {
        result = result.filter(
            employee => employee.department === department
        );
    }

    // Sorting
    switch (sortSelect.value) {

        case "nameAsc":
            result.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            break;

        case "nameDesc":
            result.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
            break;

        case "salaryAsc":
            result.sort((a, b) =>
                a.salary - b.salary
            );
            break;

        case "salaryDesc":
            result.sort((a, b) =>
                b.salary - a.salary
            );
            break;
    }

    displayEmployees(result);
}


// Search + filter
function updateEmployees() {

    const searchText = searchInput.value.toLowerCase();

    let result = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchText) ||
        employee.email.toLowerCase().includes(searchText)
    );

    applyFilters(result);
}


// Show employee details
function showDetails(id) {

    const employee = employees.find(
        employee => employee.id === id
    );

    if (!employee) {
        return;
    }

    alert(
        `Employee Details\n\n` +
        `Name: ${employee.name}\n` +
        `Email: ${employee.email}\n` +
        `Department: ${employee.department}\n` +
        `Salary: ₹${employee.salary}\n` +
        `City: ${employee.city}`
    );
}


// Open add employee form
document.getElementById("addEmployeeBtn").addEventListener(
    "click",
    () => {

        editingId = null;

        formTitle.textContent = "Add Employee";

        employeeForm.reset();

        modal.style.display = "flex";
    }
);


// Edit employee
function editEmployee(id) {

    const employee = employees.find(
        employee => employee.id === id
    );

    if (!employee) {
        return;
    }

    editingId = id;

    formTitle.textContent = "Edit Employee";

    employeeId.value = employee.id;
    nameInput.value = employee.name;
    emailInput.value = employee.email;
    departmentInput.value = employee.department;
    salaryInput.value = employee.salary;
    cityInput.value = employee.city;

    modal.style.display = "flex";
}


// Add or update employee
employeeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const employeeData = {
        id: editingId || Date.now(),
        name: nameInput.value,
        email: emailInput.value,
        department: departmentInput.value,
        salary: Number(salaryInput.value),
        city: cityInput.value
    };


    // Update employee
    if (editingId) {

        employees = employees.map(employee =>
            employee.id === editingId
                ? employeeData
                : employee
        );

    }

    // Add employee
    else {

        employees.push(employeeData);

    }


    modal.style.display = "none";

    employeeForm.reset();

    updateEmployees();
});


// Delete employee
function deleteEmployee(id) {

    const employee = employees.find(
        employee => employee.id === id
    );

    if (!employee) {
        return;
    }

    const confirmed = confirm(
        `Delete ${employee.name}?`
    );

    if (!confirmed) {
        return;
    }

    employees = employees.filter(
        employee => employee.id !== id
    );

    updateEmployees();
}


// Close modal
document.getElementById("closeModal").addEventListener(
    "click",
    () => {
        modal.style.display = "none";
    }
);


// Close modal when clicking outside
window.addEventListener("click", function(event) {

    if (event.target === modal) {
        modal.style.display = "none";
    }

});


// Search event
searchInput.addEventListener(
    "input",
    updateEmployees
);


// Filter event
departmentFilter.addEventListener(
    "change",
    updateEmployees
);


// Sort event
sortSelect.addEventListener(
    "change",
    updateEmployees
);


// Start application
loadEmployees();