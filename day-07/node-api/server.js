const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");
const validateEmployee = require("./middleware/validation");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Employee API is running" });
});

app.use("/api/employees", employeeRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});