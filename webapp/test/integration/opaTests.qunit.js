/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"opensap/movie_Application/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});