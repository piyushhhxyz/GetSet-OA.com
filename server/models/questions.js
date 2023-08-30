const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
        collegeName: {type: String, required: true},
		companyName: { type: String, required: true},
		companyPhoto: { type: String, required: true},
        date: {type: String, required: true},
        intern_or_FullTime: {
            type: String,
            // enum: ["Intern", "FullTime"], 
            required: true
        },
        driveLink: {type: String, required: true},
        // uploadedBy: {
        //     type: mongoose.Schema.Types.ObjectId, 
        //     ref:"users",
        //     required: true
        // },
	},{ timestamps: true });

module.exports = mongoose.model("questions", QuestionsSchema);