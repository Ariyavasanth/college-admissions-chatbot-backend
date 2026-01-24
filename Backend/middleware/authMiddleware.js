const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.admin = decoded; // Make sure your login signs tokens with { _id: ... }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};