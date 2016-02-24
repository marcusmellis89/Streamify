"use strict";

var fs = require("fs"),
	http = require("http"),
	Transform = require("stream").Transform;

const basicTransform = new Transform({
	transform: function(chunk, encoding, next){
		const text = chunk.toString();

		this.push(text.replace(/H/g, "J"));
		next();
	}
});

const server = http.createServer((req,res) => {
	const filestream = fs.createReadStream("./documents/mydoc.txt");
	filestream
		.pipe(basicTransform)
		.pipe(res);
});

server.listen(3000);
console.log('listening on 3000');