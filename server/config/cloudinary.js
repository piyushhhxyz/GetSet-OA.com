// require('dotenv').config();
// const cloudinary = require("cloudinary").v2; 

// module.exports.cloudinary = () => {
// 	try {
// 		cloudinary.config({
// 			cloud_name: process.env.CLOUD_NAME,
// 			api_key: process.env.API_KEY,
// 			api_secret: process.env.API_SECRET,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dfrntsanb",
    api_key: "252561994942755",
    api_secret: "EtK3CGKwWg8WfIV3KOACWLaQo8g",
});

module.exports = { cloudinary };
