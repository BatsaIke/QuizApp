const jwt = require("jsonwebtoken");
const User = require("../model/User");

const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const {token} = req.cookies 
    if (!token) {
        return next(new ErrorHandler("Please login to continue.", 401));
    }
    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = await User.findById(decoded.userId);  
        next();
    } catch (err) {
        return next(new ErrorHandler("Invalid token. Please login again.", 401));
    }
});

module.exports = isAuthenticated 