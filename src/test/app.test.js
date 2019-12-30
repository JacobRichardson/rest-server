/** 
 * This file tests the app file.
 */

// Imports.
const test = require('tape');

// Test to see if app complies.
test('app complies.', t => {

	try {

		// Require in the app module.
		const app = require('../app');

		// Close the app.
		app.close();

		// Pass the test.
		t.pass('No error requiring in the app module.');
	}
	catch (e) {

		// Fail the test with the error.
		t.fail(e);
	}

	// End the test.
	t.end();
});