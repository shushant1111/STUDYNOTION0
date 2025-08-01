// Importing the Mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Loads environment variables from a .env file into process.env
require("dotenv").config();

// Destructuring the MongoDB connection URL from environment variables
const { MONGODB_URL } = process.env;

// Exporting a function to connect to the MongoDB database
exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			// These options are used to remove deprecation warnings
			useNewUrlParser: true,        // Corrected spelling: was `useNewurlparser`
			useUnifiedTopology: true,
		})
		// This `then` executes immediately because you're passing the result of console.log instead of a function
		.then(() => console.log(`DB Connection Success`))  // ✅ Fixed: wrapped in arrow function
		.catch((err) => {
			// If connection fails, log the error and exit the process
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1); // Exit the Node.js process with failure code
		});
};
