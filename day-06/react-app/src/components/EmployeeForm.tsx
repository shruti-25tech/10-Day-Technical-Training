import { useEffect, useState } from "react";
import type { Employee } from "../types/Employee";

interface EmployeeFormProps {
    onSave: (employee: Employee) => void;
    editingEmployee: Employee | null;
    onCancel: () => void;
}

function EmployeeForm({
    onSave,
    editingEmployee,
    onCancel
}: EmployeeFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (editingEmployee) {
            setName(editingEmployee.name);
            setEmail(editingEmployee.email);
            setDepartment(editingEmployee.department);
            setSalary(String(editingEmployee.salary));
            setPhone(editingEmployee.phone ?? "");
        } else {
            resetForm();
        }
    }, [editingEmployee]);

    const resetForm = () => {
        setName("");
        setEmail("");
        setDepartment("");
        setSalary("");
        setPhone("");
        setError("");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name.trim() || !email.trim() || !department.trim() || !salary) {
            setError("Please fill all required fields.");
            return;
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }

        const salaryValue = Number(salary);

        if (salaryValue <= 0) {
            setError("Salary must be greater than 0.");
            return;
        }

        const employee: Employee = {
            id: editingEmployee ? editingEmployee.id : Date.now(),
            name: name.trim(),
            email: email.trim(),
            department: department.trim(),
            salary: salaryValue,
            phone: phone.trim() || undefined
        };

        onSave(employee);
        resetForm();
    };

    return (
        <form className="employee-form" onSubmit={handleSubmit}>
            <h2>
                {editingEmployee ? "Edit Employee" : "Add Employee"}
            </h2>

            {error && <p className="form-error">{error}</p>}

            <input
                type="text"
                placeholder="Employee name *"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <input
                type="text"
                placeholder="Department *"
                value={department}
                onChange={(event) =>
                    setDepartment(event.target.value)
                }
            />

            <input
                type="number"
                placeholder="Salary *"
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
            />

            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            />

            <button type="submit">
                {editingEmployee ? "Update Employee" : "Add Employee"}
            </button>

            {editingEmployee && (
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            )}
        </form>
    );
}

export default EmployeeForm;