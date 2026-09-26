CREATE DATABASE facility_management;

USE facility_management;

CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    department_id INT,
    user_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE facilities (
    facility_id INT PRIMARY KEY AUTO_INCREMENT,
    facility_name VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    hygiene_score DECIMAL(5,2)
);

CREATE TABLE inspections (
    inspection_id INT PRIMARY KEY AUTO_INCREMENT,
    facility_id INT NOT NULL,
    user_id INT,
    inspection_date DATE NOT NULL,
    cleanliness_score DECIMAL(5,2),
    status VARCHAR(50),
    FOREIGN KEY (facility_id) REFERENCES facilities(facility_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE complaints (
    complaint_id INT PRIMARY KEY AUTO_INCREMENT,
    facility_id INT NOT NULL,
    user_id INT,
    complaint_text VARCHAR(255),
    complaint_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (facility_id) REFERENCES facilities(facility_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
INSERT INTO departments (department_name)
VALUES
('Data Science'),
('Engineering'),
('Human Resources');

INSERT INTO users (name, email, role)
VALUES
('Rahul', 'rahul@example.com', 'Inspector'),
('Priya', 'priya@example.com', 'Inspector'),
('Amit', 'amit@example.com', 'Employee'),
('Sneha', 'sneha@example.com', 'Admin');

INSERT INTO employees (name, salary, department_id, user_id)
VALUES
('Amit', 55000, 1, 3),
('Neha', 65000, 1, NULL),
('Raj', 48000, 2, NULL),
('Pooja', 72000, 2, NULL),
('Kiran', 50000, 3, NULL);

INSERT INTO facilities (facility_name, location, hygiene_score)
VALUES
('Central Facility', 'Amravati', 85),
('North Facility', 'Nagpur', 60),
('South Facility', 'Yavatmal', 45),
('East Facility', 'Akola', 72);

INSERT INTO inspections
    (facility_id, user_id, inspection_date, cleanliness_score, status)
VALUES
(1, 1, '2026-09-01', 90, 'Good'),
(2, 2, '2026-09-03', 65, 'Average'),
(3, 1, '2026-09-05', 40, 'Poor'),
(4, 2, '2026-09-07', 75, 'Good');

INSERT INTO complaints
    (facility_id, user_id, complaint_text, complaint_date, status)
VALUES
(3, 1, 'Poor cleanliness', '2026-09-06', 'Open'),
(3, 2, 'Waste not removed', '2026-09-07', 'Open'),
(2, 1, 'Bad odor', '2026-09-08', 'Resolved'),
(1, 2, 'Water issue', '2026-09-09', 'Open');

-- =========================
-- SQL PRACTICE QUERIES
-- =========================

SELECT
    d.department_name,
    e.name AS employee_name
FROM departments d
JOIN employees e
    ON d.department_id = e.department_id;

SELECT AVG(salary) AS average_salary
FROM employees;
SELECT name, salary
FROM employees
ORDER BY salary DESC
LIMIT 1;

SELECT *
FROM facilities
WHERE hygiene_score < 50;

SELECT
    f.facility_name,
    COUNT(c.complaint_id) AS complaint_count
FROM facilities f
LEFT JOIN complaints c
    ON f.facility_id = c.facility_id
GROUP BY f.facility_id, f.facility_name;

SELECT
    f.facility_name,
    i.inspection_date,
    i.cleanliness_score,
    i.status
FROM inspections i
JOIN facilities f
    ON i.facility_id = f.facility_id
ORDER BY i.inspection_date;

SELECT *
FROM employees
ORDER BY salary DESC;

SELECT
    department_id,
    AVG(salary) AS average_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 55000;

SELECT
    e.name,
    d.department_name,
    e.salary
FROM employees e
JOIN departments d
    ON e.department_id = d.department_id;

SELECT name, salary
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);

CREATE INDEX idx_employee_salary
ON employees(salary);


START TRANSACTION;

UPDATE employees
SET salary = salary + 1000
WHERE employee_id = 1;

ROLLBACK;