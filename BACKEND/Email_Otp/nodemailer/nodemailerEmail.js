const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const sendGridDetails = {
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
};

console.log(process.env.SENDGRID_API_KEY);

const msg = {
  to: "manoj.naik.4work@gmail.com",
  from: "naik47236@gmail.com",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

const transporter = nodemailer.createTransport(sendGridDetails);
transporter
  .sendMail(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error('Error details:', error.response ? error.response.body : error);
});