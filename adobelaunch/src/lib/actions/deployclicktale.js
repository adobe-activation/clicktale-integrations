'use strict';

var loadScript = require('@turbine/load-script');
var getExtensionSettings = require('@turbine/get-extension-settings');

module.exports = function(settings) {
	// TODO Perform some action.
	var PTCurl = 'https://cdnssl.clicktale.net/' + extensionSettings.partition + '/ptc/' +extensionSettings.guid +'.js'
	loadScript(PTCurl).then(function() {
	// Do something ...
	})
};