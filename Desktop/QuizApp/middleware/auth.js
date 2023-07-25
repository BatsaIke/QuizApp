const jwt = require("jsonwebtoken");

const dotenv = require('dotenv');

dotenv.config();

module.exports = function (req, res, next) {
  //get token from the header
  const token = req.header("x-auth-token");

  //check if no t0ken
  if (!token) {
    return res.status(401).json({ msg: "No token, autorization denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
