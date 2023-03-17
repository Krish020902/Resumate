const express = require("express");
const cors = require("cors");
const connectDB = require("./Userdb/connect");
const task = require("./route/tasks");
const email = require("./route/tasks");
// const task = require("./route/tasks");
const user = require("./route/user");
const authenticate = require("./middleware/authenticate");
const cookieParser = require("cookie-parser");
// const connect = require("./route/tasks");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/user", user); 
app.use("/task", authenticate, task);
app.use("/email", authenticate, email);

// app.use("/email", authenticate, task);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port=${port}`);
    });
  } catch (error) {
    console.log(`Sorry connection ! ${error}`);
  }
};
start();
