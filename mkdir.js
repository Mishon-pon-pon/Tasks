const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

console.log(args);

for (let i = 1; i <= args[1]; i++) {
  fs.writeFileSync(path.resolve(`${args[0]}/${i > 9 ? i : "0" + i}.js`), "");
}
