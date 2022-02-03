const express = require("express");
const authorization = require("../middlewares/authorization");
const controller = require("../controllers/email.controller");

const router = express.Router();

router.post("/send", authorization, controller.send);

module.exports = router;