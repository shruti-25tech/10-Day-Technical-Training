import type { Employee } from "../types/Employee";

interface DashboardProps {
    employees: Employee[];
}

function Dashboard({ employees }: DashboardProps) {
    const totalEmployees = employees.length;

    const averageSalary =
        employees.length > 0
            ? employees.reduce(
                  (sum, employee) => sum + employee.salary,
                  0
              ) / employees.length
            : 0;

    const departmentCount = new Set(
        employees.map((employee) => employee.department)
    ).size;

    return (
        <div className="dashboard">
            <div className="stat-card">
                <h3>Total Employees</h3>
                <p>{totalEmployees}</p>
            </div>

            <div className="stat-card">
                <h3>Average Salary</h3>
                <p>₹{averageSalary.toFixed(0)}</p>
            </div>

            <div className="stat-card">
                <h3>Departments</h3>
                <p>{departmentCount}</p>
            </div>
        </div>
    );
}

export default Dashboard;