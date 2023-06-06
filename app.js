const express = require("express");
const app = express();

require("./startup/route")(app);

app.get("/", (req, res) => {
  res.send("SMPT-based Application");
  res.setHeader("X-foo", "bar");
});

// console.log(process.env.NODE_ENV);
// console.log(process.env.SMTP_SERVER);
// console.log(process.env.SMTP_PORT);
// console.log(process.env.SMTP_USERNAME);
// console.log(process.env.SMTP_PASSWORD);
// console.log(process.env.SENDER_EMAIL);

const port = process.env.PORT || 5000;

const server = app.listen(port, (req, res) => {
  console.log(`App is running on port no: ${port}...`);
});

module.exports = server;
