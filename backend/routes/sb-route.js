const express = require("express");
const SbItemController = require("../controllers/sb-controller");
const SbItemModel = require("../models/sb-model");

const router = express.Router();

router.post("", SbItemController.createSbItem );

router.put("/:id", SbItemController.updateSbItem);

router.get("", SbItemController.getSbItems);

router.delete("/:id", SbItemController.deleteSbItem);

module.exports = router;