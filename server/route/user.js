const express = require("express");
const router = express.Router();
const { SignUP, Login } = require("../controller/user");
router.route("/signin").post(SignUP);
router.route("/login").post(Login);
module.exports = router;
