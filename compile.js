const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const compiled = solc.compile(JSON.stringify(input));

const inboxContract = JSON.parse(compiled).contracts["Inbox.sol"].Inbox;
console.log("🚀 ~ file: compile.js ~ line 27 ~ inboxContract", inboxContract);

module.exports = inboxContract;
