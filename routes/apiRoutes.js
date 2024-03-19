const express = require("express");
const apicontroller = require("../controllers/apicontroller");
const viewcontroller = require("../controllers/viewcontroller");

const router = express.Router();

router.get("/data", apicontroller.getData);
router.post("/data", apicontroller.createData);
router.put("/data/:id", apiCcntroller.updateData);
router.patch("/data/:id", apicontroller.partialUpdateData);
router.delete("/data/:id", apicontroller.deleteData);

router.get("/", viewcontroller.renderView);

module.exports = router;