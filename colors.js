//colors = {"r": '\x1b[31m',"o": '\x1b[37m',"y": '\x1b[33m',"g": '\x1b[32m',"b": '\x1b[34m',"v": '\x1b[35m'};
colors = {"r": '\x1b[41m',"o": '\x1b[47m',"y": '\x1b[43m',"g": '\x1b[42m',"b": '\x1b[44m',"v": '\x1b[45m'};
console.log("\x1b[41m%s\x1b[0m", "We out here")
for(const [key, value] of Object.entries(colors)){
	console.log(`${value}${key}\x1b[0m`);
}
