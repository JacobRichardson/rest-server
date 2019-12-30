/** 
 * This module is responsible for connecting
 * to the database.
 */

// Imports.
const config = require('../config/config');
const mongoose = require('mongoose');

// Make mongo use promises.
mongoose.Promise = Promise;

// Set debug to true.
mongoose.set('debug', true);

// Set connection string equal to the connection string in env or the config connection string the .
const connectString = process.env.DATABASE_CONNECTION_STRING || config.database.connectionString;

// If connection string is truthy.
if (connectString) {

	// Connect to the database with the connection string.
	mongoose.connect(connectString);
}


// Export the the transaction model.
module.exports.transaction = require('../models/transaction');

// Export a close function.
module.exports.close = () => mongoose.connection.close();