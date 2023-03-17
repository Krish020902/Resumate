const nodeMailer = require("nodemailer");
const fs = require("fs");
const { StatusCodes } = require("http-status-codes");
require("dotenv").config;
const email = async (req, res) => {
  try {
    // const token = req.cookies.JWT;

    // const decode = await JWTDecode(token);

    // const userId = decode.userId;

    // const user = await User.findById(userId);
    // console.log("insdie email");
    const { email } = req.user;
    const senderemail = req.params.email;

    // const email1 = "krish.mehta.3822@gmail.com";

    const pdf = fs.readFileSync(`${__dirname}/Resume.pdf`, {
      encoding: "base64",
    });

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: process.env.TWO_FACTOR_GMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Krish Mehta" ${email}`,
      to: senderemail,
      subject: "Resume",
      text: "Your resume",
      attachments: [
        {
          filename: "Resume.pdf",
          content: pdf,
          encoding: "base64",
        },
      ],
    });
    console.log("this is onfp", info);
    res.status(StatusCodes.OK).json(info);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { email };
