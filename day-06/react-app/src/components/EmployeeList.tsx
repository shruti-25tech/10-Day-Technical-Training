import type { Employee } from "../types/Employee";

interface EmployeeListProps {
    employees: Employee[];
    onEdit: (employee: Employee) => void;
    onDelete: (id: number) => void;
    onDetails: (employee: Employee) => void;
}

function EmployeeList({
    employees,
    onEdit,
    onDelete,
    onDetails
}: EmployeeListProps) {
    return (
        <div className="employee-section">
            <h2>Employee List</h2>

            {employees.length === 0 ? (
                <p>No employees found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>₹{employee.salary}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            onDetails(employee)
                                        }
                                    >
                                        Details
                                    </button>

                                    <button
                                        onClick={() =>
                                            onEdit(employee)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            onDelete(employee.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default EmployeeList;