const express = require("express");
const router = express.Router();
const { uploadResponse, sheetResponse } = require("../Controllers/HomeController");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });


router.post("/upload", upload.single("file"), uploadResponse);
router.post("/sheet", sheetResponse);


module.exports = router;