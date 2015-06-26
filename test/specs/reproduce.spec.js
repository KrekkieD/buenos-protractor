'use strict';

describe('reproduce', function () {

	it ('should open the homepage', function () {

		browser.get('/manualbootstrap.html');

	});

	it ('should fill a form in the proper order', function () {

		$('[ng-model="one"]').sendKeys('1');
		$('[ng-model="one"]').sendKeys('2');
		$('[ng-model="one"]').sendKeys('3');
		$('[ng-model="one"]').sendKeys('4');
		$('[ng-model="one"]').sendKeys('5');
		$('[ng-model="one"]').sendKeys('6');
		$('[ng-model="one"]').sendKeys('7');

		expect($('[ng-model="one"]').getAttribute('value')).not.toEqual('1234567');

	});

	it ('should open the homepage', function () {

		browser.get('/manualbootstrap.html');

	});

	it ('should fill a form in the proper order', function () {

		$('[ng-model="one"]').sendKeys('1');
		$('[ng-model="one"]').sendKeys('2');
		$('[ng-model="one"]').sendKeys('3');
		$('[ng-model="one"]').sendKeys('4');
		$('[ng-model="one"]').sendKeys('5');
		$('[ng-model="one"]').sendKeys('6');
		$('[ng-model="one"]').sendKeys('7');

		expect($('[ng-model="one"]').getAttribute('value')).toEqual('1234567');

		protractor.promise.controlFlow().execute(function () {});

	});

});