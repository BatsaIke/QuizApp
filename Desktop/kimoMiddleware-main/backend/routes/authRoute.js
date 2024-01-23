const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const { getAuthenticatedUser } = require("../controller/UserController");

router.route("/user").get(auth, getAuthenticatedUser);

module.exports = router;
