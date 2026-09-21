import { useEffect, useState } from "react";
import type { Employee, UsersResponse } from "../types/Employee";

export function useEmployees() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch(
                    "https://dummyjson.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch employees");
                }

                const data: UsersResponse = await response.json();

                const formattedEmployees: Employee[] = data.users.map(
                    (user) => ({
                        id: user.id,
                        name: `${user.firstName} ${user.lastName}`,
                        email: user.email,
                        department: user.company.department,
                        phone: user.phone,
                        salary: user.id * 5000
                    })
                );

                setEmployees(formattedEmployees);
            } catch (err) {
                setError("Unable to load employee data.");
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    return {
        employees,
        setEmployees,
        loading,
        error
    };
}