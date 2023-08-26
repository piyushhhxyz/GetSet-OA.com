const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
		username: { type: String, required: true},
        profilePhotoURL: {type: String, required: true},
	},{ timestamps: true });

module.exports = mongoose.model("users", UsersSchema);