# Day 7 - Next.js + Node.js

## Objective

Understand modern React application development using Next.js and backend API development using Node.js and Express.

## Next.js

- App Router
- Pages and layouts
- Dynamic routes
- Employee dashboard
- Data fetching
- Create employee page

### Routes

- `/employees`
- `/employees/[id]`
- `/employees/create`

## Node.js + Express

Created a REST API for employee management.

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| POST | `/api/employees` | Create employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

## Backend Structure

```text
node-api/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
└── server.js