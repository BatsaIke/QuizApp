const express = require("express");
const { check } = require("express-validator");


const {upload}= require('../multer')

const router = express.Router();

const {createUserDetails, activateUser,loginUser}= require('../controller/UserController')

router
  .route("/user/create-user")
  .post([upload.single('file'), [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
    check("password", "Enter a valid password").isLength({ min: 6 }),
  ],],createUserDetails)

  //activate user
  router.route('/user/activation').post(activateUser)

  //login user
  router.route('/user/login').post([
    check("email", "Enter a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],loginUser)

module.exports= router