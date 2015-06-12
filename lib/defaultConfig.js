'use strict';

module.exports = {

	capabilities: {
		browserName: 'chrome',
		version: 'ANY',
		platform: 'ANY',
		chromeOptions: {
			args: ['--test-type']
		}
	},

	chromeDriver: require('chromedriver').path,
	seleniumServerJar: require('selenium-server-standalone-jar').path,

	framework: 'jasmine',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000,
		includeStackTrace: true
	},

	maxSessions: 1

};