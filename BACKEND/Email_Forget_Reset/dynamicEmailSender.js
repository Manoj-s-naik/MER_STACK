const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();
const fs = require("fs");

async function updateTemplateHelper(templatePath, toreplaceObject) {
  let templateContent = await fs.promises.readFile(templatePath, "utf-8");
  const keyArrays = Object.keys(toreplaceObject);
  keyArrays.forEach((key) => {
    // Replace the placeholder with the corresponding value from the object
    templateContent = templateContent.replace(
      `#{${key}}`,
      toreplaceObject[key]
    );
  });

  return templateContent;
}

async function emailSender(templatePath, recieverEmail, toreplaceObject) {
  try {
    const content = await updateTemplateHelper(templatePath, toreplaceObject);

    // Define SendGrid transport configuration
    const sendGridDetails = {
      host: "smtp.sendgrid.net",
      port: 465,
      secure: true,
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
    };

    // Email message details
    const msg = {
      to: recieverEmail,
      from: "naik47236@gmail.com",
      subject: "Sending with SendGrid is Fun",
      text: "", // You can define a plain-text version if required
      html: content,
    };

    const transporter = nodemailer.createTransport(sendGridDetails);
    await transporter.sendMail(msg);
  } catch (err) {
    console.log("Email not sent due to error:", err);
  }
}

module.exports = emailSender;