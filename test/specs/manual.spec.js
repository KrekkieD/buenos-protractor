'use strict';

describe('manual', function () {

	it ('should open the homepage', function () {

		browser.get('/manualbootstrap.html');

	});

	it ('should fill a form in the proper order', function () {

		$('[ng-model="one"]').sendKeys('one');
		$('[ng-model="two"]').sendKeys('two');
		$('[ng-model="three"]').sendKeys('three');
		$('[ng-model="four"]').sendKeys('four');
		$('[ng-model="five"]').sendKeys('five');
		$('[ng-model="six"]').sendKeys('six');
		$('[ng-model="seven"]').sendKeys('seven');

		protractor.promise.controlFlow().execute(function () {});

	});

});