var fs = require('fs');
var exports = module.exports = {};

exports.writeToFile = function(filePath, data) {
	fs.writeFile(filePath, data, function(err) {
		if(err) throw err;
		console.log("[INFO] File write complete to path: " + filePath);
	});
};

exports.writeToFileXML = function(filePath, data) {
	if(filePath.indexOf(".xml") != -1) {
		fs.writeFile(filePath, data, function(err) {
			if(err) throw err;
			console.log("[INFO] File write complete to path(XML): " + filePath);
		});
	} else {
		console.log("[ERROR] Error while trying to write xml data.");
	}
};