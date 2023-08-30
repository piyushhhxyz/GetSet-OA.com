const express = require("express")
const router = express.Router()
const { handleUpload } = require("../controllers/Upload");


router.post('/upload', handleUpload);

module.exports = router