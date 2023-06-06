const express = require("express");
const mail = require("../routes/mail");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/mail", mail);
};
