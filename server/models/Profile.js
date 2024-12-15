const mongoose = require("mongoose");
//profile
// Define the Profile schema
const profileSchema = new mongoose.Schema({
	gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	about: {
		type: String,
		trim: true,
	},
	contactNumber: {
		type: Number,
		trim: true,
	},
});
//files
// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);
