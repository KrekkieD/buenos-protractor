'use strict';

var $express = require('express');

module.exports = {
	start: start
};

function start (cb) {

	var app = $express();

	app.use($express.static(__dirname));

	var server = app.listen(8989, function () {
		console.log('starting');

		cb().on('end', function () {
			server.close();
		});

	});

}
