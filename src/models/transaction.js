/**
 * This is the transaction model.
 */

// Imports.
const mongoose = require('mongoose');

// Transaction schema.
const transactionSchema = new mongoose.Schema({
	date: {
		type: String
		, required: true
	}
	, description: {
		type: String
	}
	, category: {
		type: String
	}
	, amount: {
		type: Number
		, required: true
	}
	, created_at: {
		type: Date
		, required: true
		, default: Date.now
	}
	, updated_at: {
		type: Date
	}
});

// Before a record is saved.
transactionSchema.pre('save', async function (next) {

	// Set updated at to a new date.
	this.updated_at = new Date();

	// Return next.
	return next();
});

// Create the Transaction model using the schema.
const Transaction = mongoose.model('Transaction', transactionSchema);

// Export the model.
module.exports = Transaction;