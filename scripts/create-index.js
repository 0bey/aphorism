const fs = require("fs");
const files = fs.readdirSync(".");
const indexObj = { files };

console.log(files);

fs.writeFileSync("./index.json", JSON.stringify(indexObj, null, 2));
