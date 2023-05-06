const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = new mongoose.Schema({
  f_name: {
    type: String,
    required: [true, "first name should be provided"],
  },
  l_name: {
    type: String,
    required: [true, "last name should be provided"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email should be provided"],
  },
  pass: {
    type: String,
    required: [true, "password should be provided"],
  },
  cv: [],
});

User.methods.Createjwt = function () {
  return jwt.sign(
    { userID: this._id, email: this.email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

User.methods.comparePass = async function (candidatepass) {
  console.log(candidatepass);
  const isMatch = await bcrypt.compare(candidatepass, this.pass);
  return isMatch;
};

module.exports = mongoose.model("user", User);
