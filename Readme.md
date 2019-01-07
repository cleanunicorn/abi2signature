# abi2signature

Generates the Ethereum ABI 4 byte signatures if you provide the ABI or the function signature.

## Installation
```console
$ npm i -g abi2signature
```

## Usage examples

#### From stdin
```console
$ abi2signature < cryptokitties-abi.json
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

#### From function string
```console
$ abi2signature func2sig "receive(address)"
Computing function receive(address)
receive(address) -> 0x9d01174f
```

#### From ABI string
```console
$ abi2signature string2sig '[{...your abi...}]' 
```