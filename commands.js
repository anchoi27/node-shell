var fs = require('fs');
module.exports = {
	pwd: function(file) {
		process.stdout.write(process.env.PWD);
	},
	date: function(file) {
		process.stdout.write(Date());
	},
	ls: function(file){
		fs.readdir('.', function(err, files) {
			if (err) throw err;
			files.forEach(function(file) {
				process.stdout.write(file.toString() + "\n");
			});
		});
	},
	echo: function(file) {
		process.stdout.write(file);
	},
	cat: function(file) {
		var filePath = process.env.PWD + "/" + file;
		fs.readFile(filePath, function(err, data){
			if (err) throw err;
			process.stdout.write(data);
		});
	},
	head: function(file) {
		var filePath = process.env.PWD + "/" + file;
		fs.readFile(filePath, function(err, data){
			if (err) throw err;
			var dataArr = data.toString().trim();
			var dataLines = dataArr.match(/[^\r\n]+/g);
			for(var i = 0; i < 5; i++){
				process.stdout.write(dataLines[i] + "\n");
			}
		});
	},
	tail: function(file) {
		var filePath = process.env.PWD + "/" + file;
		fs.readFile(filePath, function(err, data){
			if (err) throw err;
			var dataArr = data.toString().trim();
			var dataLines = dataArr.match(/[^\r\n]+/g);
			var fifthToTheLast = dataLines.length - 5;
			for(var i = fifthToTheLast; i < dataLines.length; i++){
				process.stdout.write("\n" + dataLines[i]);
			}
		});
	}
};
