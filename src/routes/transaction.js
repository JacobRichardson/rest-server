/** 
 * This is the transaction route.
 */

// Imports.
const express = require('express');
const TransactionService = require('../services/transaction');

/*
 * Globals.
 */

// Create the router from express.
const router = express.Router();

// Create a new transaction service using the transaction model.
const transactionService = new TransactionService({});

// Multiple transaction get route.
router.get('/', async (req, res) => {

	// Pass the query to the transaction service to retrieve the transactions.
	const transactions = await transactionService.get({ query: req.query });

	// Return the transactions.
	return res.json({
		transactions
	});
});

// Singular transaction get route.
router.get('/:transaction_id', async (req, res) => {

	// Pass the transaction id to the transaction service to retrieve the transactions.
	const transaction = await transactionService.get({
		_id: req.params.transaction_id
	});

	// Return the transactions.
	return res.json({
		transaction
	});
});

// Transaction post route.
router.post('/', async (req, res) => {

	// Pass the request's body to the transaction service to create the trasnaction.
	const transaction = await transactionService.create({
		transaction: req.body
	});

	// Return the newly created transaction.
	return res.json({
		transaction
	});
});

// Transaction patch route.
router.patch('/:transaction_id', async (req, res) => {

	// Update the transaction using the transaction service.
	const transaction = await transactionService.update({
		_id: req.params.transaction_id
		, transaction: req.body
	});

	// Return the updated transaction.
	return res.json({
		transaction
	});
});

// Transaction delete route.
router.delete('/:transaction_id', async (req, res) => {

	// Update the transaction using the transaction service.
	const transaction = await transactionService.delete({
		_id: req.params.transaction_id
	});

	// Return the updated transaction.
	return res.json({
		transaction
	});
});

// Export the router.
module.exports = router;