const employeeService = require("../services/employeeService");

const getEmployees = (req, res) => {
  res.json(employeeService.getAllEmployees());
};

const getEmployee = (req, res) => {
  const employee = employeeService.getEmployeeById(req.params.id);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(employee);
};

const createEmployee = (req, res) => {
  const employee = employeeService.createEmployee(req.body);
  res.status(201).json(employee);
};

const updateEmployee = (req, res) => {
  const employee = employeeService.updateEmployee(
    req.params.id,
    req.body
  );

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(employee);
};

const deleteEmployee = (req, res) => {
  const employee = employeeService.deleteEmployee(req.params.id);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json({
    message: "Employee deleted successfully",
    employee
  });
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};