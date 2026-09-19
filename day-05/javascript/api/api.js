const API_URL = "https://jsonplaceholder.typicode.com/users";

// GET
async function getEmployees() {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log("GET Response:");
    console.log(data.slice(0, 2));
}


// POST
async function addEmployee() {
    const employee = {
        name: "Rahul Sharma",
        username: "rahul",
        email: "rahul@example.com"
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });

    const data = await response.json();

    console.log("POST Response:");
    console.log(data);
}


// PUT
async function updateEmployee() {
    const employee = {
        name: "Rahul Updated",
        username: "rahul_updated",
        email: "rahul.updated@example.com"
    };

    const response = await fetch(`${API_URL}/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });

    const data = await response.json();

    console.log("PUT Response:");
    console.log(data);
}


// DELETE
async function deleteEmployee() {
    const response = await fetch(`${API_URL}/1`, {
        method: "DELETE"
    });

    console.log("DELETE Status:", response.status);
}


// Run all operations
async function main() {
    await getEmployees();
    await addEmployee();
    await updateEmployee();
    await deleteEmployee();
}

main();