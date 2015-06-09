var exports = module.exports = {};

exports.readJSONFile = function(filePath) {
	var jsonObj = require(filePath);
	return jsonObj;
};