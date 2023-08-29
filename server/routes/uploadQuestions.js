const { handleQuestionsUpload } = require("../controllers/uploadQuestions")
const router = require("express").router()

router.post("/uploadeQuestions", handleQuestionsUpload)