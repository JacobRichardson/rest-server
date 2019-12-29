/**
 * This is the rest server.
 */

// Imports.
require('dotenv').config();
const debug = require('debug')('rest-server');
const config = require('./src/config/config');
const app = require('./src/app');

/** 
 * Globals
 */

// The port number.
const PORT = process.env.PORT || config.port || 8000;

// Listen on the port.
app.listen(PORT, () => {

	// Log the server has started.
	console.log(`Rest server has started on port ${PORT}.`);
	debug(`Rest server has started on port ${PORT}.`);
});