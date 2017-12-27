var Web3 = require('web3')
var web3 = new Web3()
var fs = require("fs")

if (process.argv.length < 3) {
    console.log("Run this like");
    console.log("nodejs main.js {command} {path-to-abi.json|function}");
    console.log("");
    console.log("Command can be");
    console.log("   abi2sig     - reads a file and computes for every function and event defined there the signature");
    console.log("   func2sig    - takes the function and computes the signature");
    console.log("");
    console.log("Example: nodejs main.js abi2sig cryptokitties-abi.json");
    console.log('Example: nodejs main.js func2sig "approve(address,uint256)"');
    process.exit();
}

switch (process.argv[2]) {
    case "abi2sig":
        console.log("Reading file", process.argv[3])    
        var contractABI = JSON.parse(fs.readFileSync(process.argv[3]))
        
        for (i = 0; i < contractABI.length; i++) {
            abiFunction = contractABI[i]
        
            if (abiFunction.name == undefined) {
                continue
            }
        
            signature = web3.eth.abi.encodeFunctionSignature(abiFunction)
            console.log(signature, "->", abiFunction.name)
        }
        break
    case "func2sig":
        console.log("Computing function", process.argv[3])    
        var func = process.argv[3]
        
        console.log(func, "->", web3.eth.abi.encodeFunctionSignature(func))
        break
}    

