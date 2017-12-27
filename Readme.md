Run
```
nodejs main.js {command} {path-to-abi.json|function}
```

Example `abi2sig`
```
$ node main.js abi2sig cryptokitties-abi.json
Reading file cryptokitties-abi.json
0x06fdde03 -> [ function ] name
0x095ea7b3 -> [ function ] approve
0x18160ddd -> [ function ] totalSupply
0x23b872dd -> [ function ] transferFrom
0x313ce567 -> [ function ] decimals
0x475a9fa9 -> [ function ] issueTokens
0x70a08231 -> [ function ] balanceOf
0x95d89b41 -> [ function ] symbol
0xa9059cbb -> [ function ] transfer
0xdd62ed3e -> [ function ] allowance
0xddf252ad -> [ event ] Transfer
0x8c5be1e5 -> [ event ] Approval
```

Example `func2sig`
```
$ node main.js func2sig "receive()"
Computing function receive()
receive() -> 0xa3e76c0f
