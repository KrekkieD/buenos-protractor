'use strict';

// this starts a dummy server and runs exampleImplementation once the server is up
require('./server/index').start(exampleImplementation);




var $path = require('path');

var $buenosProtractor = require('..');

function exampleImplementation () {


	var gulpStream = $buenosProtractor({
		specs: [__dirname + '/specs/*.spec.js'],
		config: {
			configFile: $path.resolve(__dirname, 'protractor.config.js')
		}
	});


	// you can catch errors on the gulpStream:
	gulpStream.on('error', function () {

		console.log('E2E boobooed!');

	});

	// or catch when it ends
	gulpStream.on('end', function () {

		console.log('E2E done!');

	});

	// return the stream to allow chaining
	// the example server kills itself when the stream is ended
	return gulpStream;

}