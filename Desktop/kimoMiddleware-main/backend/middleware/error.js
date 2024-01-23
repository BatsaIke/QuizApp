const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB ID error
  if (err.name === "CastError") {
    const message = `Resource not found with id. Invalid ${err.path}`;
    err = new ErrorHandler(message, 404);
  }

  // Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
}

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = "Your URL is invalid. Please try again.";
    err = new ErrorHandler(message, 400);
  }

  // JWT expired
  if (err.name === "TokenExpiredError") {
    const message = "Your URL has expired. Please try again later.";
    err = new ErrorHandler(message, 400);
  }

  // Add path and line information to the error
  err.path = err.path || "N/A";
  err.line = err.line || "N/A";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    path: err.path,
    line: err.line,
  });
};
