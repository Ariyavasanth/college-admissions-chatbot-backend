const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split("")[1];

  if (!token) {
    return res.status(401).json({ message: "No authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalide token" });
  }
};
