var Web3 = require('web3')
var web3 = new Web3()
var fs = require("fs")

if (process.argv.length < 3) {
    console.log("Run this like");
    console.log("nodejs main.js [path-to-abi.json]");
    console.log("");
    console.log("Example: nodejs main.js cryptokitties-abi.json");
    process.exit();
}

var contractABI = JSON.parse(fs.readFileSync(process.argv[2]))

for (i = 0; i < contractABI.length; i++) {
    abiFunction = contractABI[i]

    if (abiFunction.name == undefined) {
        continue
    }

    signature = web3.eth.abi.encodeFunctionSignature(abiFunction)
    console.log(signature, "->", "[", abiFunction.type ,"]", abiFunction.name)
}

