const express = require("express");
const router = express.Router();

const { Createpdf, Fetchpdf, temp } = require("../controller/tasks");
const { email } = require("../controller/email");
// console.log("chutiya", email);
router.route("/create-pdf/:id").post(Createpdf);
router.route("/email/:email").get(email);
// router.route("/create-pdf/:id").post(email);
router.route("/").get(temp);
router.route("/fetch-pdf").get(Fetchpdf);

module.exports = router;
