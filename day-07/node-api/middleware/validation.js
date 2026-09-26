const validateEmployee = (req, res, next) => {
  const { name, role, department } = req.body;

  if (!name || !role || !department) {
    return res.status(400).json({
      message: "Name, role and department are required"
    });
  }

  next();
};

module.exports = validateEmployee;