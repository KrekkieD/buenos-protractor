'use strict';

var $path = require('path');

var $gulp = require('gulp');
var $protractor = require('gulp-protractor').protractor;


module.exports = run;
module.exports.getConfig = getConfig;

var DEFAULT_SPECS = ['./**/*.spec.js'];

var DEFAULT_CONFIG = {
	configFile: $path.resolve(__dirname, 'protractor.conf.js')
};

function run (options) {

	var specs = options.specs || DEFAULT_SPECS;
	var config = options.config || DEFAULT_CONFIG;


	return $gulp.src(specs)
		.pipe($protractor(config));

}

function getConfig () {

	return require('./lib/defaultConfig');

}