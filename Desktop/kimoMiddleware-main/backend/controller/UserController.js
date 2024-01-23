const jwt = require("jsonwebtoken");
const User = require("../model/User");
const createActivationToken = require("../utils/createActivationToken");
const { validationResult } = require("express-validator");
const ErrorHandler = require("../utils/ErrorHandler");
const sendMail = require("../utils/SendMail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const errorHandler = require("../middleware/errorHandler");
const sendToken = require("../utils/sendToken");
const uploadFile = require("../utils/uploadFile");
const deleteUploadedFile = require("../utils/deleteUploadedFile");

//@route POST api/v1/user-create
//@desc create user route
//access public
const createUserDetails = async (req, res) => {
  const errors = validationResult(req);

  // Check if no errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  try {
    // Check if user exists
    let userMail = await User.findOne({ email });
    if (userMail) {
      // Check if there's a file uploaded and delete it if necessary
      if (req.file) {
        deleteUploadedFile(req.file);
      }
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    // Call the file upload function
    const fileUrl = await uploadFile(req.file);
    // Create instance of user
    const user = {
      name,
      email,
      password,
      fileUrl,
    };

    const activatoinToken = createActivationToken(user);
    const activationurl = `http://localhost:3000/activation/${activatoinToken}`;
    try {
      await sendMail({
        email: user.email,
        subject: "Activate your account",
        message: `Hello ${user.name}, please click on the link to activate your account: ${activationurl}`,
      });
      res.status(201).json({
        success: true,
        message: `please check your email:- ${user.email} to activate your account!`,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

//activate user

//@route POST api/v1/activation
//@desc create user route
//access public
const activateUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { activation_token } = req.body;
    const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);
    console.log(newUser,"User EEEE");
    if (!newUser) {
      return next(new ErrorHandler("Invalid token", 400));
    }
    const { name, email, password, avatar } = newUser.user;
    let user = await User.findOne({ email });
    console.log(user,"USER EEEE");
    if (user) {
      return res.status(200).json({
        success: true,
        message: "User activated successfully",
      });
    }
    user = await User.create({
      name,
      email,
      avatar,
      password,
    });
console.log("WE WRE DONE")
    sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

//login user
//@rout POST api/v1/login
//@desc authenticate user and get token
//access public
const loginUser = catchAsyncErrors(async (req, res, next) => {
  try {
    // Validate the request body using validationResult
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // If there are validation errors, respond with a 400 status and error details
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    // Destructure email and password from the request body
    const { email, password } = req.body;
    // Check if a user with the provided email exists
    let user = await User.findOne({ email });

    // If no user is found, respond with a 400 status and an "Invalid user" error
    if (!user) {
      return res.status(400).json({ success: false, errors: [{ msg: "Invalid user" }] });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await user.comparePassword(password);

    // If passwords do not match, respond with a 400 status and an "Invalid user" error
    if (!isMatch) {
      return res.status(400).json({ success: false, errors: [{ msg: "Invalid user" }] });
    }

    // If validation and authentication are successful, send a token
    sendToken(user, 200, res);
   return res.status(200).json("User successfully signed in");
   
  } catch (error) {
    // If an unexpected error occurs, log it and respond with a 500 status
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});



//get logged in user

//@rout GET api/v1/user
//@desc test route
//access public
const getAuthenticatedUser = async(req,res)=>{
  try {
      const user= await User.findById(req.user.id).select("-password")
      console.log(user,"USER oo")
      res.json(user)
  } catch (error) {
      console.error(error.message)
      res.status(500).send('server error')
      
  }
}

module.exports = {
  //   getUserDetails,
  activateUser,
  createUserDetails,
  loginUser,
  getAuthenticatedUser
};
