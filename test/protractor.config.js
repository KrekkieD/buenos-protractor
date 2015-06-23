'use strict';

module.exports.config = require('..').getConfig();

var config = module.exports.config;

config.baseUrl = 'http://localhost:8989';
config.onPrepare = function () {

	// don't choke on non-angular sites
	//browser.ignoreSynchronization = true;

};

//config.rootElement = '[ng-app]';
