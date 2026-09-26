const employees = require("../models/employeeModel");

const getAllEmployees = () => {
  return employees;
};

const getEmployeeById = (id) => {
  return employees.find((employee) => employee.id === Number(id));
};

const createEmployee = (employeeData) => {
  const newEmployee = {
    id: employees.length > 0
      ? Math.max(...employees.map((employee) => employee.id)) + 1
      : 1,
    ...employeeData
  };

  employees.push(newEmployee);
  return newEmployee;
};

const updateEmployee = (id, employeeData) => {
  const employee = employees.find(
    (employee) => employee.id === Number(id)
  );

  if (!employee) {
    return null;
  }

  Object.assign(employee, employeeData);
  return employee;
};

const deleteEmployee = (id) => {
  const index = employees.findIndex(
    (employee) => employee.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  return employees.splice(index, 1)[0];
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};