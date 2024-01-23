const jwt = require("jsonwebtoken");

// create activation token
const createActivationToken = (user) => {
    return jwt.sign({ user: user }, process.env.ACTIVATION_SECRET, {
      expiresIn: "5m",
    });
  };

  module.exports = createActivationToken;