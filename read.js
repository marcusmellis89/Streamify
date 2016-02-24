"use strict";

var fs = require("fs");

const reader = fs.createReadStream("./documents/mydoc.txt");

let fileContents = "";
reader.on("data", data => {
	fileContents += data;
});	

reader.on("end", ()=>{
	console.log('Data found: '+fileContents);
});