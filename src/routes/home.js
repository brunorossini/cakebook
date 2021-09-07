const express = require("express");

const authenticated = require("../middlewares/authenticated.middleware");

const privateController = require("../controllers/private.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Birds home page 2");
});

router.get("/private", authenticated, privateController.index);

module.exports = router;
