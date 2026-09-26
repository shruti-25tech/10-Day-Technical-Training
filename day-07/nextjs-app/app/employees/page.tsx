import Link from "next/link";
import { employees } from "@/data/employees";

export default function EmployeesPage() {
  return (
    <main>
      <h1>Employee Dashboard</h1>

      <Link href="/employees/create">
        Add Employee
      </Link>

      <div>
        {employees.map((employee) => (
          <div key={employee.id}>
            <h2>{employee.name}</h2>
            <p>{employee.role}</p>
            <p>{employee.department}</p>

            <Link href={`/employees/${employee.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}