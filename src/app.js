/**
 * This is the rest app.
 */

// Imports.
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./lib/db');
const transactionRoutes = require('./routes/transaction');

// Globals.
const app = express();

app.use(bodyParser.json());

// Use the transaction routes on the /transaction url.
app.use('/transactions', transactionRoutes);

// Export the app.
module.exports = app;

// Export the close function from the db.
module.exports.close = db.close;