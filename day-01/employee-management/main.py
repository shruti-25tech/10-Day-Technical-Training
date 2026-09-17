employees = []


def find_employee(emp_id):
    return next((emp for emp in employees if emp["id"] == emp_id), None)


def display_employee(emp):
    print(
        f"ID: {emp['id']} | "
        f"Name: {emp['name']} | "
        f"Department: {emp['department']} | "
        f"Salary: ₹{emp['salary']:.2f}"
    )


def add_employee():
    print("\n--- Add Employee ---")

    emp_id = input("Employee ID: ").strip()

    if not emp_id:
        print("Error: ID cannot be empty.")
        return

    if find_employee(emp_id):
        print("Error: Employee ID already exists.")
        return

    name = input("Name: ").strip()
    department = input("Department: ").strip()

    if not name or not department:
        print("Error: Name and department cannot be empty.")
        return

    try:
        salary = float(input("Salary: "))

        if salary < 0:
            print("Error: Salary cannot be negative.")
            return

    except ValueError:
        print("Error: Salary must be a valid number.")
        return

    employees.append({
        "id": emp_id,
        "name": name,
        "department": department,
        "salary": salary
    })

    print("Employee added successfully.")


def update_employee():
    print("\n--- Update Employee ---")

    emp_id = input("Enter employee ID: ").strip()
    emp = find_employee(emp_id)

    if not emp:
        print("Error: Employee not found.")
        return

    name = input(f"Name [{emp['name']}]: ").strip()
    department = input(f"Department [{emp['department']}]: ").strip()
    salary = input(f"Salary [{emp['salary']}]: ").strip()

    if name:
        emp["name"] = name

    if department:
        emp["department"] = department

    if salary:
        try:
            salary = float(salary)

            if salary < 0:
                print("Error: Salary cannot be negative.")
                return

            emp["salary"] = salary

        except ValueError:
            print("Error: Salary must be a valid number.")
            return

    print("Employee updated successfully.")


def delete_employee():
    print("\n--- Delete Employee ---")

    emp_id = input("Enter employee ID: ").strip()
    emp = find_employee(emp_id)

    if not emp:
        print("Error: Employee not found.")
        return

    employees.remove(emp)
    print("Employee deleted successfully.")


def search_employee():
    print("\n--- Search Employee ---")

    keyword = input("Enter ID or name: ").strip().lower()

    if not keyword:
        print("Error: Search value cannot be empty.")
        return

    results = [
        emp for emp in employees
        if keyword in emp["id"].lower()
        or keyword in emp["name"].lower()
    ]

    if not results:
        print("No employee found.")
        return

    for emp in results:
        display_employee(emp)


def list_employees():
    print("\n--- All Employees ---")

    if not employees:
        print("No employees available.")
        return

    for emp in employees:
        display_employee(emp)


def highest_salary():
    print("\n--- Highest Salary ---")

    if not employees:
        print("No employees available.")
        return

    emp = max(employees, key=lambda x: x["salary"])
    display_employee(emp)


def average_salary():
    print("\n--- Average Salary ---")

    if not employees:
        print("No employees available.")
        return

    average = sum(emp["salary"] for emp in employees) / len(employees)
    print(f"Average Salary: ₹{average:.2f}")


def department_filter():
    print("\n--- Department Filter ---")

    department = input("Enter department: ").strip().lower()

    results = [
        emp for emp in employees
        if emp["department"].lower() == department
    ]

    if not results:
        print("No employees found in this department.")
        return

    for emp in results:
        display_employee(emp)


def main():
    while True:
        print("\n" + "=" * 40)
        print("EMPLOYEE MANAGEMENT SYSTEM")
        print("=" * 40)
        print("1. Add Employee")
        print("2. Update Employee")
        print("3. Delete Employee")
        print("4. Search Employee")
        print("5. List All Employees")
        print("6. Highest Salary")
        print("7. Average Salary")
        print("8. Department Filter")
        print("9. Exit")

        choice = input("Enter choice (1-9): ").strip()

        if choice == "1":
            add_employee()
        elif choice == "2":
            update_employee()
        elif choice == "3":
            delete_employee()
        elif choice == "4":
            search_employee()
        elif choice == "5":
            list_employees()
        elif choice == "6":
            highest_salary()
        elif choice == "7":
            average_salary()
        elif choice == "8":
            department_filter()
        elif choice == "9":
            print("Thank you for using the Employee Management System.")
            break
        else:
            print("Error: Invalid choice.")


if __name__ == "__main__":
    main()