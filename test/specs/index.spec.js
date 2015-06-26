'use strict';

describe('index', function () {

	it ('should open the homepage', function () {

		browser.get('/');

	});

	it ('should fill a form in the proper order', function () {

		$('[ng-model="one"]').sendKeys('one');
		$('[ng-model="two"]').sendKeys('two');
		$('[ng-model="three"]').sendKeys('three');
		$('[ng-model="four"]').sendKeys('four');
		$('[ng-model="five"]').sendKeys('five');
		$('[ng-model="six"]').sendKeys('six');
		$('[ng-model="seven"]').sendKeys('seven');

		browser.sleep(1);

	});

});