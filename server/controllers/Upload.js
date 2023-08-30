const users = require("../models/user");
const questions = require("../models/questions")
const { cloudinary } = require("../config/cloudinary");

exports.handleUpload = async(req,res) => {
    try {
        // const { companyName,collegeName,date,intern_or_FullTime } = req.body
        const fileStr = req.body.data;
  
        const uploadResponse = await cloudinary.uploader.upload(fileStr, { folder: process.env.FOLDER_NAME });
        // const uploadResponse = await uploadImageToCloudinary(fileStr, folderName);
  
        console.log(`url: ${uploadResponse.url}`);
        const questionsUpload = new questions({
            companyName: "ewew",
		    companyPhoto: uploadResponse.url,
            collegeName: "ewew",
            date: "ewew",
            intern_or_FullTime: "Intern",
            // uploadedBy: req.userID,
        })
        questionsUpload.save();

        res.status(200).json({ msg: 'Upload successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}
