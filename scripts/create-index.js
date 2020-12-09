const fs = require("fs");

const LOCAL_DIRNAME = "nodes";
const GITHUB_USERNAME = "Michigander";
const GITHUB_REPONAME = "fieldnotes";
const GITHUB_BRANCHNAME = "master";

const mapToGithubRawFileLink = (filename) =>
  `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPONAME}/${GITHUB_BRANCHNAME}/${filename}`;

console.log("Creating index...");
const files = fs.readdirSync(LOCAL_DIRNAME);
const githubFiles = files.map(mapToGithubRawFileLink);
const indexObj = { githubFiles };
fs.writeFileSync("./index.json", JSON.stringify(indexObj, null, 2));
console.log(`${githubFiles.length} files indexed!`);
