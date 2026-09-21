import type { Employee } from "../types/Employee";

interface EmployeeDetailsProps {
    employee: Employee;
    onClose: () => void;
}

function EmployeeDetails({
    employee,
    onClose
}: EmployeeDetailsProps) {
    return (
        <div className="details">
            <h2>Employee Details</h2>

            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Salary:</strong> ₹{employee.salary}</p>
            <p><strong>Phone:</strong> {employee.phone || "Not provided"}</p>

            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default EmployeeDetails;