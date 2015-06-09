var readJSON = require("./ReadJSONModule/readJSON.js");
var sortJSON = require("./SortedListModule/sortJSON.js");
var writePlainFile = require("./WriteSortedPlainModule/writePlainFile.js");
var writeXMLFile = require("./WriteSortedXMLModule/writeXMLFile.js");
var express = require("express");

var app = express();

app.get('/',function(req,res){
	console.log("[INFO] Process started.");
	
	var jsonObj = readJSON.readJSONFile("../Source/source.json");
	console.log("[INFO] JSON file read complete.");
	
	var sortedJson = sortJSON.sortJSONObj(jsonObj.student, "fName", false, function(a){return a.toUpperCase()});
	console.log("[INFO] JSON data sort complete.");
	
	writePlainFile.plainWriter("./Destination/plainSortedJSONData.txt", sortedJson);
	console.log("[INFO] Data written in plain format.");
	
	writeXMLFile.xmlWriter("./Destination/XMLSortedJSONData.xml", "Students", jsonObj);
	console.log("[INFO] Data written in XML format.");
	
	res.end("Completed !!!");
});

//Start server on 3000 port
app.listen(3000,function(){
    console.log("[INFO] Server started on port 3000");
});