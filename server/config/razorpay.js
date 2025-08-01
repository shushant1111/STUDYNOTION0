// Importing the Razorpay library
const Razorpay = require("razorpay");

// Creating and exporting a Razorpay instance with API credentials
exports.instance = new Razorpay({
    // Public key used to identify the Razorpay account
	key_id: process.env.RAZORPAY_KEY,

    // Secret key used for authentication (keep it secure!)
	key_secret: process.env.RAZORPAY_SECRET,
});
