const express = require("express");
const userController = require("../controllers/user.controller");
const sessionController = require("../controllers/session.controller");

const userCreateSchema = require("../schemas/user.create");
const sessionCreateSchema = require("../schemas/session.create");

const router = express.Router();

router.post("/signup", userCreateSchema, userController.create);
router.post("/signin", sessionCreateSchema, sessionController.create);

module.exports = router;
