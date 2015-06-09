var exports = module.exports = {};
var fileWriter = require("../FileWriter/fileWriter.js");

exports.plainWriter = function(filePath, JSON) {
	var data = "Id	|	First Name	|	Last Name	|	Score\n";
	for(var stud in JSON) {
		data  = data + JSON[stud].id + "	|	" + JSON[stud].fName + "		|	" + JSON[stud].lName + "			|	" + JSON[stud].score + "\n";
	}
	fileWriter.writeToFile(filePath, data);
};