const users = require("../models/user");
const questions = require("../models/questions")
const { cloudinary } = require("../config/cloudinary");

exports.handleUpload = async(req,res) => {
    try {
        const { 
            companyName,
            collegeName,
            date,driveLink,
            internOrFullTime,
            base64EncodedImage 
        } = req.body
        // console.log(req.body)
        const uploadResponse = await cloudinary.uploader.upload(base64EncodedImage, { folder: process.env.FOLDER_NAME });
  
        const questionsUpload = new questions({
            companyName: companyName,
		    companyPhoto: uploadResponse.url,
            driveLink: driveLink,
            collegeName: collegeName,
            date: date,
            intern_or_FullTime: internOrFullTime,
        })
        questionsUpload.save();

        res.status(200).json({ msg: 'Upload successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}
