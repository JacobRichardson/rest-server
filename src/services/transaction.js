/** 
 * This is the transaction service.
 */

// Transaction Service Class.
class TransactionService {

	/**
	 * Creates an instance of TransactionService.
	 * @param {Object} opts. The opts object.
	 * @param {Object} [opts.transactionModel] Optional transaction model.
	 * @param {Object} [opts.debug] Optional debug dependency.
	 * @memberof TransactionService
	 */
	constructor({ transactionModel, debug }) {

		// Attach the dependencies onto the instance of the service.
		this.transactionModel = transactionModel || require('../models/transaction');
		this.debug = debug || require('debug');
	}

	/**
	 * Retrieves transaction(s) from the transaction model.
	 * @param {Object} opts The opts object.
	 * @param {Object} opts.query The query object.
	 * @param {Object} [opts.query.transaction_id] Optional transaction id.
	 * @returns {Array<Object>} The transaction(s) that were retrieved.
	 * @memberof TransactionService
	 */
	async get (opts) {

		// If there are no opts.
		if (!opts) {

			// Debug a message.
			this.debug('No opts provided to the transaction service get function.');

			// Return an empty object.
			return {};
		}

		// If there is no query object.
		if (!opts.query) {

			// Debug a message.
			this.debug('No query provided to the transaction service get function.');

			// Return an empty object.
			return {};
		}

		// If the query has a transaction id.
		if (opts.query._id) {

			// Retrieve the transaction from the model and using the find by id method.
			const transaction = await this.transactionModel.findById(opts.query._id);

			// Return the transaction.
			return transaction;

		}
		// There is no transaction id.
		else {

			// Retrieve the transactions from the model using the query object.
			const transactions = await this.transactionModel.find(opts.query);

			// Return the transactions.
			return transactions;
		}
	}

	/**
	 * Creates a transaction using the transaction model.
	 * @param {Object} opts The opts object.
	 * @param {Object} opts.transaction transaction to be inserted.
	 * @returns {Object} The transaction that was created.
	 * @memberof TransactionService
	 */
	async create (opts) {

		// If there are no opts.
		if (!opts) {

			// Debug a message.
			this.debug('No opts provided to the transaction service create function.');

			// Return an empty object.
			return {};
		}

		// If there is no transaction object on the opts object..
		if (!opts.transaction) {

			// Debug a message.
			this.debug('No transaction provided to the transaction service create function.');

			// Return an empty object.
			return {};
		}

		// Return the result of creating the transaction.
		return await this.transactionModel.create(opts.transaction);
	}

	/**
	 * Updates a transaction using the transaction model.
	 * @param {Object} opts The opts object.
	 * @param {Object} opts.transaction The values that are to be updated.
	 * @returns {Object} The transaction that was created.
	 * @memberof TransactionService
	 */
	async update (opts) {

		// If there are no opts.
		if (!opts) {

			// Debug a message.
			this.debug('No opts provided to the transaction service update function.');

			// Return an empty object.
			return {};
		}

		// If there is no id on the opts object.
		if (!opts._id) {

			// Debug a message.
			this.debug('No id provided to the transaction service update function.');

			// Return an empty object.
			return {};
		}

		// If there is no transaction object on the opts object.
		if (!opts.transaction) {

			// Debug a message.
			this.debug('No transaction object provided to the transaction service update function.');

			// Return an empty object.
			return {};
		}

		// Retrieve the transaction by the id.
		let transaction = await this.transactionModel.findById(opts._id);

		// Remove any values that are not supposed to be changed.
		delete opts.transaction._id;
		delete opts.transaction.created_at;
		delete opts.transaction.updated_at;

		// Update the transaction using the Object's assign method.
		transaction = Object.assign(transaction, opts.transaction);

		// Return the result of saving the transaction.
		return await transaction.save();
	}

	/**
	 * Deletes a transaction using the transaction model.
	 * @param {Object} opts The opts object.
	 * @param {Object} opts._id The id of the transaction to be deleted.
	 * @returns {Object} The transaction that was deleted.
	 * @memberof TransactionService
	 */
	async delete (opts) {

		// If there are no opts.
		if (!opts) {

			// Debug a message.
			this.debug('No opts provided to the transaction service delete function.');

			// Return an empty object.
			return {};
		}

		// If there is no id on the opts object.
		if (!opts._id) {

			// Debug a message.
			this.debug('No id provided to the transaction service delete function.');

			// Return an empty object.
			return {};
		}

		// Find the transaction by using the transaction model and the id that was passed in.
		const transaction = await this.transactionModel.findById(opts._id);

		// If a transaction wasn't found.
		if (!transaction) {

			// Debug a message.
			this.debug('No transaction was found when trying to use the transaction services\' delete method.');

			// Return an empty object.
			return {};
		}

		// Delete the transaction.
		await transaction.remove();

		// Return the transaction that was removed.
		return transaction;
	}
}

// Export the class.
module.exports = TransactionService;