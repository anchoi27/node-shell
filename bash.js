var commands = require("./commands.js");

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
	var input = data.toString().trim();
	var cmd = input.match(/[^\d\s]+/)[0];
	//match(/[^\s]+/)
	var file = input.substr(input.indexOf(" ") + 1);
	// console.log(input);
	// console.log(cmd);
	// console.log(file);
	if (cmd === "pwd") commands.pwd();
	if (cmd === "date") commands.date();
	if (cmd === "ls") commands.ls();
	if (cmd === "echo") commands.echo(file);

	if (cmd === "cat") commands.echo(file);
	if (cmd === "head") commands.echo(file);
	if (cmd === "tail") commands.echo(file);
	//process.stdout.write('\nprompt > ');
});
