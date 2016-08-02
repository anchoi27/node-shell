var commands = require("./commands.js");

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
	var cmd = data.toString().trim();
	var firstCommand = cmd.slice(0 ,cmd.indexOf(" "));
	var file = cmd.substr(cmd.indexOf(" ") + 1);
	if (cmd === "pwd") commands.pwd();
	else if (cmd === "date" || cmd === "date") commands.date();
	else if (cmd === "ls") commands.ls(file);
	else if (firstCommand === "echo") commands.echo(file);
	else if (firstCommand === "cat") commands.cat(file);
	else if (firstCommand === "head") commands.head(file);
	else if (firstCommand === "tail") commands.tail(file);
	else process.stderr.write('command not found: ' + input);
	process.stdout.write('\nprompt > ');
});
