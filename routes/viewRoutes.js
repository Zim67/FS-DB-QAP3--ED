const express = require("express");
const viewController = require("../controllers/viewcontroller");

const router = express.Router();

router.get("/", viewController.renderView);

module.exports = router;