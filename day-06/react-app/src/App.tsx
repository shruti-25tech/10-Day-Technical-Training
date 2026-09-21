import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { useEmployees } from "./hooks/useEmployees";
import type { Employee } from "./types/Employee";

function App() {
    const {
        employees,
        setEmployees,
        loading,
        error
    } = useEmployees();

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [sortBy, setSortBy] = useState("name");
    const [editingEmployee, setEditingEmployee] =
        useState<Employee | null>(null);
    const [selectedEmployee, setSelectedEmployee] =
        useState<Employee | null>(null);

    const departments = useMemo(
        () =>
            Array.from(
                new Set(
                    employees.map(
                        (employee) => employee.department
                    )
                )
            ).sort(),
        [employees]
    );

    const filteredEmployees = useMemo(() => {
        return [...employees]
            .filter((employee) =>
                employee.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            )
            .filter(
                (employee) =>
                    department === "All" ||
                    employee.department === department
            )
            .sort((a, b) => {
                if (sortBy === "salary") {
                    return b.salary - a.salary;
                }

                return a.name.localeCompare(b.name);
            });
    }, [employees, search, department, sortBy]);

    const handleSave = (employee: Employee) => {
        setEmployees((currentEmployees) => {
            const exists = currentEmployees.some(
                (item) => item.id === employee.id
            );

            if (exists) {
                return currentEmployees.map((item) =>
                    item.id === employee.id ? employee : item
                );
            }

            return [...currentEmployees, employee];
        });

        setEditingEmployee(null);
    };

    const handleDelete = (id: number) => {
        setEmployees((currentEmployees) =>
            currentEmployees.filter(
                (employee) => employee.id !== id
            )
        );

        if (selectedEmployee?.id === id) {
            setSelectedEmployee(null);
        }
    };

    if (loading) {
        return <h2 className="message">Loading employees...</h2>;
    }

    if (error) {
        return <h2 className="message">{error}</h2>;
    }

    return (
        <div className="container">
            <h1>Employee Management Dashboard</h1>

            <Dashboard employees={employees} />

            <EmployeeForm
                onSave={handleSave}
                editingEmployee={editingEmployee}
                onCancel={() => setEditingEmployee(null)}
            />

            <div className="controls">
                <input
                    type="text"
                    placeholder="Search employee..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />

                <select
                    value={department}
                    onChange={(event) =>
                        setDepartment(event.target.value)
                    }
                >
                    <option value="All">All Departments</option>

                    {departments.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>

                <select
                    value={sortBy}
                    onChange={(event) =>
                        setSortBy(event.target.value)
                    }
                >
                    <option value="name">Sort by Name</option>
                    <option value="salary">Sort by Salary</option>
                </select>
            </div>

            <EmployeeList
                employees={filteredEmployees}
                onEdit={setEditingEmployee}
                onDelete={handleDelete}
                onDetails={setSelectedEmployee}
            />

            {selectedEmployee && (
                <EmployeeDetails
                    employee={selectedEmployee}
                    onClose={() => setSelectedEmployee(null)}
                />
            )}
        </div>
    );
}

export default App;