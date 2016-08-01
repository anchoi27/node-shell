var fs = require('fs');
module.exports = {
	pwd: function(file) {
		console.log(process.env.PWD);
	},
	date: function(file) {
		var now = new Date();
		console.log(now);
	},
	ls: function(file){
		fs.readdir('.', function(err, files) {
			if (err) throw err;
			files.forEach(function(file) {
				process.stdout.write(file.toString() + "\n");
			});
			process.stdout.write("prompt > ");
		});
	},
	echo: function(file) {
		console.log(file);
	},
	cat: function(file) {
		var filePath = process.env.PWD + "/" + file;
		fs.readFile(filePath, function(err, data){
			if (err) throw err;
			console.log(process.env.PWD);
			console.log(filePath);
		});
	}
	/*
	head: function(file) {

	},
	tail: function(file) {

	}
	*/
};