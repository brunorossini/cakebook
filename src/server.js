const express = require("express");
const routes = require("./routes");

const app = express();

require("./config/mongodb");

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

module.exports = app;
