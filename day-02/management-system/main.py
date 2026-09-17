import json

FILE_NAME = "employees.json"


def load_employees():
    try:
        with open(FILE_NAME, "r") as file:
            return json.load(file)

    except FileNotFoundError:
        return []

    except json.JSONDecodeError:
        print("Invalid JSON file.")
        return []


def save_employees(employees):
    with open(FILE_NAME, "w") as file:
        json.dump(employees, file, indent=4)


def display_employees(employees):
    if not employees:
        print("No employees found.")
        return

    for employee in employees:
        print(
            employee["id"],
            employee["name"],
            employee["department"],
            employee["salary"]
        )


def add_employee(employees):
    try:
        employee_id = int(input("Enter ID: "))
        name = input("Enter name: ")
        department = input("Enter department: ")
        salary = float(input("Enter salary: "))

        employee = {
            "id": employee_id,
            "name": name,
            "department": department,
            "salary": salary
        }

        employees.append(employee)
        save_employees(employees)

        print("Employee added successfully.")

    except ValueError:
        print("Please enter valid values.")


def update_employee(employees):
    try:
        employee_id = int(input("Enter ID to update: "))

        for employee in employees:
            if employee["id"] == employee_id:

                employee["name"] = input("Enter new name: ")
                employee["department"] = input("Enter new department: ")
                employee["salary"] = float(input("Enter new salary: "))

                save_employees(employees)

                print("Employee updated successfully.")
                return

        print("Employee not found.")

    except ValueError:
        print("Invalid input.")


def delete_employee(employees):
    try:
        employee_id = int(input("Enter ID to delete: "))

        for employee in employees:
            if employee["id"] == employee_id:

                employees.remove(employee)
                save_employees(employees)

                print("Employee deleted successfully.")
                return

        print("Employee not found.")

    except ValueError:
        print("Invalid ID.")


def search_employee(employees):
    name = input("Enter employee name: ").lower()

    result = [
        employee
        for employee in employees
        if name in employee["name"].lower()
    ]

    display_employees(result)


def filter_department(employees):
    department = input("Enter department: ").lower()

    result = [
        employee
        for employee in employees
        if employee["department"].lower() == department
    ]

    display_employees(result)


def sort_by_salary(employees):
    result = sorted(
        employees,
        key=lambda employee: employee["salary"],
        reverse=True
    )

    display_employees(result)


def statistics(employees):
    if not employees:
        print("No employee data available.")
        return

    salaries = [employee["salary"] for employee in employees]

    print("Total employees:", len(employees))
    print("Average salary:", sum(salaries) / len(salaries))
    print("Highest salary:", max(salaries))
    print("Lowest salary:", min(salaries))


def main():

    employees = load_employees()

    while True:

        print("\n--- Employee Management System ---")
        print("1. Add Employee")
        print("2. Update Employee")
        print("3. Delete Employee")
        print("4. Search Employee")
        print("5. Filter by Department")
        print("6. Sort by Salary")
        print("7. Statistics")
        print("8. List Employees")
        print("9. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            add_employee(employees)

        elif choice == "2":
            update_employee(employees)

        elif choice == "3":
            delete_employee(employees)

        elif choice == "4":
            search_employee(employees)

        elif choice == "5":
            filter_department(employees)

        elif choice == "6":
            sort_by_salary(employees)

        elif choice == "7":
            statistics(employees)

        elif choice == "8":
            display_employees(employees)

        elif choice == "9":
            print("Program ended.")
            break

        else:
            print("Invalid choice.")


if __name__ == "__main__":
    main()