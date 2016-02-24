"use strict";

var stream = require("stream");

const source = new stream.Readable({
	objectMode: true
});

source.push({name: "WHOA"});
source.push({name: "Marcus"});
source.push(null);

const dest = new stream.Writable({
	objectMode: true,

	write: function(chunk, encoding, next){
	console.log('Writing : ' + chunk.name);
		next();
	}
});

const transform = new stream.Transform({
	objectMode: true,

	transform: function(chunk, encoding, next){
		chunk.name = 'Not ' + chunk.name;
		this.push(chunk);
		next();
	}
});

source.pipe(transform).pipe(dest);

