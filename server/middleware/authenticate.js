const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("this is token:", token);
  if (!token) {
    throw new Error("No token provided");
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decode);
    const { userID, email } = decode;
    req.user = { userID, email };
    next();
  } catch (error) {
    throw new Error("Sorry! you are not authorized");
  }
};

module.exports = authenticate;
