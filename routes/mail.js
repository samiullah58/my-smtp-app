const nodemailer = require("nodemailer");
require("dotenv").config();
const fs = require("fs");
const express = require("express");
const router = express.Router();
router.use(express.json());

router.post("/", () => {
  const smtpServer = process.env.SMTP_SERVER;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUsername = process.env.SMTP_USERNAME;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const senderEmail = process.env.SENDER_EMAIL;

  const transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    secure: false,
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  const htmlFilePath = "html-content/file.html";

  fs.readFile(htmlFilePath, "utf-8", (error, htmlContent) => {
    if (error) {
      console.error("Error reading HTML file:", error);
      return;
    }

    // Email options
    const mailOptions = {
      from: senderEmail,
      to: "aliaqib13@gmail.com",
      cc: "samiullahrashid4@gmail.com",
      subject: "HTML Page Through nodemailer",
      html: htmlContent,
      attachments: [
        {
          filename: "123.jpg",
          path: "./html-content/image/123.jpg",
          cid: "123.jpg",
        },
      ],
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  });
});

module.exports = router;
