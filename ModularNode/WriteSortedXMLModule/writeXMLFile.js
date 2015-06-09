var js2xmlparser = require("js2xmlparser");
var fileWriter = require("../FileWriter/fileWriter.js");
var exports = module.exports = {};

exports.xmlWriter = function(filePath, RootName, JSON) {
	var xmlData = js2xmlparser(RootName, JSON);
	fileWriter.writeToFileXML(filePath, xmlData);
}