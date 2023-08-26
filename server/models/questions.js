const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
		companyName: { type: String, required: true},
		companyPhoto: { type: String, required: true},
        collegeName: {type: String, required: true},
        date: {type: String, required: true},
        intern_or_FullTime: {
            type: String,
            enum: ["Intern", "FullTime"], 
            required: true
        },
        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId, 
            ref:"user"
        },
	},{ timestamps: true });

module.exports = mongoose.model("questions", QuestionsSchema);