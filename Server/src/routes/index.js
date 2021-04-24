const express = require("express");

const router = express.Router();
const { AddEvent, getEvent } = require("../controllers/event");
const { uploadFile } = require("../middlewares/upload");

// code here
router.get("/events", getEvent);
router.post("/add-event", uploadFile("image"), AddEvent);

module.exports = router;
